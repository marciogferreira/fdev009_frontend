import { useNavigate, useParams } from "react-router-dom";
import LayoutDefault from "../../../layouts/LayoutDefault";
import axios from "axios";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from 'yup'
import swal from 'sweetalert';
import { useState, useEffect } from "react";

function UsuariosForm() {

    const navigate = useNavigate();
    const params = useParams();

    const [data, setData] = useState({
        nome: '',
        email: '',
        senha: '',
    })

    async function getData() {
        if(params.id) {
            const response = await axios.get('http://localhost:3000/usuarios/'+params.id)
            setData(response.data)
        }
    }

    async function salvarDados(values, forms) {
        // validado
        // ENVIA OS DADOS PARA O JSON SERVER
        if(params.id) {
            await axios.put('http://localhost:3000/usuarios/'+params.id, values)
        } else {
            await axios.post('http://localhost:3000/usuarios', values)
        }
        // LIMPA OS DADOS DO FORMULARIO
        forms.resetForm();
        if(params.id) {
            swal("Sucesso!", "Usuário Atualizado com Sucesso.", "success");
        } else {
            swal("Sucesso!", "Usuário Salvo com Sucesso.", "success");
        }
        
        navigate('/usuarios');
    }

    // CONFIGURA OS CAMPOS PARA VALIDACAO
    const validationSchema = Yup.object({
        nome: Yup.string().required('Campo Obrigatório'),
        email: Yup.string().required('Campo Obrigatório').email('E-mail inválido.'),
        senha: Yup.string().required('Campo Obrigatório').min(6, 'Senha deve conter pelo menos 6 digitos.')
    });

    useEffect(() => {
        getData();
    }, [])


    return (
        <>
            <LayoutDefault>
                <h5>Formulário de Usuários</h5>
                <div className="d-flex justify-content-end">
                   
                </div>
                <Formik
                    enableReinitialize={true}
                    initialValues={data}
                    validationSchema={validationSchema}
                    onSubmit={salvarDados}
                >
                    {({ handleSubmit }) => (
                        <form>
                            <div>
                                <label htmlFor="nome">Nome:</label>
                                <Field type="text" id="nome" name="nome" className="form-control" required />
                                
                            </div>
                            <span className="error">
                                <ErrorMessage name="nome" />
                            </span>
                            <div>
                                <label htmlFor="email">Email:</label>
                                <Field type="email" id="email" name="email" className="form-control"  required />
                            </div>
                            <span className="error">
                                <ErrorMessage name="email" />
                            </span>
                            <div>
                                <label htmlFor="senha">Senha:</label>
                                <Field type="password" id="senha" name="senha" className="form-control"  required />
                            </div>
                            <span className="error">
                                <ErrorMessage name="senha" />
                            </span>
                            <div className="mt-3 d-flex justify-content-end">
                                <button type="button" onClick={() => handleSubmit()} className="btn btn-success btn-sm">
                                    Salvar
                                </button>
                                &nbsp;
                                <button className="btn btn-warning btn-sm" onClick={() => navigate('/usuarios')}>
                                    Cancelar
                                </button>
                            </div>
                        </form>
                    )}
                </Formik>
                

            </LayoutDefault>
        </>
    )
}

export default UsuariosForm;