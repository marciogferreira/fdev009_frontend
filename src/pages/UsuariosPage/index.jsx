import { useEffect, useState } from "react";
import LayoutDefault from "../../layouts/LayoutDefault";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
function UsuariosPage() {
    const [lista, setLista] = useState([]);
    const navigate = useNavigate();
    
    async function getLista() {
        const response = await axios.get('http://localhost:3000/usuarios')
        setLista(response.data)
        console.log(response.data)
    }

    async function excluirItem(id) {
        try {

            swal({
                title: "Atenção!",
                text: "Deseja excluir este registro?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
              })
              .then(async (willDelete) => {
                if (willDelete) {
                    await axios.delete('http://localhost:3000/usuarios/'+id)
                    swal("Sucesso!", "Usuário excluído com Sucesso.", "success");  
                    getLista()
                }
            });
        } catch (e) {
            swal("Oops!", e.message, "error");  
        }
    }

    useEffect(() => {
        getLista();
    }, []);

    return (
        <LayoutDefault>
            <button className="btn btn-success btn-sm" onClick={() => navigate('/usuarios/novo')}>Novo Usuário</button>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {lista.map((item) => (
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.nome}</td>
                            <td>{item.email}</td>
                            <td>
                                <button className="btn btn-primary btn-sm" onClick={() => navigate(`/usuarios/editar/${item.id}`)}>
                                    Editar
                                </button>
                                &nbsp;
                                <button className="btn btn-danger btn-sm" onClick={() => excluirItem(item.id)}>Excluir</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </LayoutDefault>
    )
}

export default UsuariosPage;