import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import LayoutDefault from "../../../layouts/LayoutDefault";

function Pedidos() {
  const [lista, setLista] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  const navigate = useNavigate();

  // Função para buscar os usuários e pedidos
  async function getLista() {
    try {
      const [pedidosResponse, usuariosResponse] = await Promise.all([
        axios.get("http://localhost:3000/pedidos"),
        axios.get("http://localhost:3000/usuarios"),
      ]);

      if (Array.isArray(pedidosResponse.data)) {
        setLista(pedidosResponse.data);
      } else {
        // Supondo que a resposta tenha a estrutura { "pedidos": [...] }
        setLista(pedidosResponse.data.pedidos || []);
      }

      if (Array.isArray(usuariosResponse.data)) {
        setUsuarios(usuariosResponse.data);
      }
    } catch (error) {
      swal("Erro!", "Não foi possível carregar a lista de pedidos.", "error");
      console.error(error);
    }
  }

  async function excluirItem(id) {
    try {
      swal({
        title: "Atenção!",
        text: "Deseja excluir este registro?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then(async (willDelete) => {
        if (willDelete) {
          await axios.delete("http://localhost:3000/pedidos/" + id);
          swal("Sucesso!", "Pedido excluído com sucesso.", "success");
          getLista(); // Atualiza a lista após exclusão
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
      <button
        className="btn btn-success btn-sm"
        onClick={() => navigate("/pedidos/novo")}
      >
        Novo Pedido
      </button>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Usuário</th>
            <th>Data/Hora</th>
            <th>Total</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {lista.map((pedido) => {
            // Busca o usuário correspondente ao pedido
            const usuario = usuarios.find(
              (user) => user.id === pedido.usuario_id
            );
            const nomeUsuario = usuario ? usuario.nome : "Usuário desconhecido";

            return (
              <tr key={pedido.id}>
                <td>{pedido.id}</td>
                <td>{nomeUsuario}</td>
                <td>{pedido.data_hora}</td>
                <td>{pedido.total.toFixed(2)}</td>
                <td>{pedido.status}</td>
                <td>
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => navigate(`/pedidos/editar/${pedido.id}`)}
                  >
                    Editar
                  </button>
                  &nbsp;
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => excluirItem(pedido.id)}
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </LayoutDefault>
  );
}

export default Pedidos;
