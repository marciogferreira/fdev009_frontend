import { useNavigate, useParams } from "react-router-dom";
import LayoutDefault from "../../../layouts/LayoutDefault";
import axios from "axios";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from 'yup'
import swal from 'sweetalert';
import { useState, useEffect } from "react";

function CategoriasForm() {

    const navigate = useNavigate();
    const params = useParams();

    const [data, setData] = useState({
        categoria: '',
    })

    async function getData() {
        if(params.id) {
            const response = await axios.get('http://localhost:3000/categorias/'+params.id)
            setData(response.data)
        }
    }

    async function salvarDados(values, forms) {
        // validado
        // ENVIA OS DADOS PARA O JSON SERVER
        if(params.id) {
            await axios.put('http://localhost:3000/categorias/'+params.id, values)
        } else {
            await axios.post('http://localhost:3000/categorias', values)
        }
        // LIMPA OS DADOS DO FORMULARIO
        forms.resetForm();
        if(params.id) {
            swal("Sucesso!", "Categoria Atualizada com Sucesso.", "success");
        } else {
            swal("Sucesso!", "Categoria Salva com Sucesso.", "success");
        }
        
        navigate('/categorias');
    }

    // CONFIGURA OS CAMPOS PARA VALIDACAO
    const validationSchema = Yup.object({
        categoria: Yup.string().required('Campo Obrigatório'),
    });

    useEffect(() => {
        getData();
    }, [])


    return (
        <>
            <LayoutDefault>
                <h5>Formulário de Categorias</h5>
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
                                <label htmlFor="categoria">Categoria:</label>
                                <Field type="text" id="categoria" name="categoria" className="form-control" required />
                                
                            </div>
                            <span className="error">
                                <ErrorMessage name="categoria" />
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

export default CategoriasForm;