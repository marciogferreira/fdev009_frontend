// Importa os Hooks do React para gerenciar estado e efeitos colaterais
import { useEffect, useState } from "react";
// Importa a biblioteca axios para fazer requisições HTTP
import axios from "axios";
// Importa o hook useNavigate do React Router para navegação entre páginas
import { useNavigate } from "react-router-dom";
// Importa a biblioteca sweetalert para exibir alertas bonitos
import swal from "sweetalert";
// Importa um layout padrão para a página de pedidos
import LayoutDefault from "../../../layouts/LayoutDefault";

// Define o componente Pedidos
function Pedidos() {
  // Inicializa o estado local para armazenar a lista de pedidos e usuários
  const [lista, setLista] = useState([]); // Lista de pedidos
  const [usuarios, setUsuarios] = useState([]); // Lista de usuários
  const navigate = useNavigate(); // Inicializa o hook de navegação

  // Função assíncrona para buscar a lista de pedidos e usuários
  async function getLista() {
    try {
      // Faz requisições paralelas para buscar pedidos e usuários
      const [pedidosResponse, usuariosResponse] = await Promise.all([
        axios.get("http://localhost:3000/pedidos"), // Requisição para obter pedidos
        axios.get("http://localhost:3000/usuarios"), // Requisição para obter usuários
      ]);

      // Verifica se a resposta de pedidos é um array
      if (Array.isArray(pedidosResponse.data)) {
        setLista(pedidosResponse.data); // Atualiza o estado com a lista de pedidos
      } else {
        // Se a resposta não for um array, tenta acessar a propriedade "pedidos"
        setLista(pedidosResponse.data.pedidos || []); // Atualiza a lista, se disponível
      }

      // Verifica se a resposta de usuários é um array
      if (Array.isArray(usuariosResponse.data)) {
        setUsuarios(usuariosResponse.data); // Atualiza o estado com a lista de usuários
      }
    } catch (error) {
      // Se houver um erro, exibe um alerta de erro
      swal("Erro!", "Não foi possível carregar a lista de pedidos.", "error");
      console.error(error); // Registra o erro no console
    }
  }

  // Função assíncrona para excluir um pedido
  async function excluirItem(id) {
    try {
      // Exibe um alerta de confirmação para exclusão
      swal({
        title: "Atenção!",
        text: "Deseja excluir este registro?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then(async (willDelete) => {
        // Se o usuário confirmar a exclusão
        if (willDelete) {
          await axios.delete("http://localhost:3000/pedidos/" + id); // Faz a requisição DELETE
          swal("Sucesso!", "Pedido excluído com sucesso.", "success"); // Alerta de sucesso
          getLista(); // Atualiza a lista de pedidos após exclusão
        }
      });
    } catch (e) {
      // Se houver um erro durante a exclusão, exibe um alerta de erro
      swal("Oops!", e.message, "error");
    }
  }

  // Hook useEffect para buscar os dados quando o componente é montado
  useEffect(() => {
    getLista(); // Chama a função para buscar pedidos e usuários
  }, []); // O array vazio significa que isso acontece apenas uma vez, quando o componente é montado

  return (
    <LayoutDefault>
      {/* Botão para navegar para a página de novo pedido */}
      <button
        className="btn btn-success btn-sm"
        onClick={() => navigate("/pedidos/novo")} // Navega para a nova página de pedido
      >
        Novo Pedido
      </button>
      {/* Tabela para exibir a lista de pedidos */}
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
          {/* Mapeia sobre a lista de pedidos para renderizar cada pedido */}
          {lista.map((pedido) => {
            // Busca o usuário correspondente ao pedido usando seu ID
            const usuario = usuarios.find(
              (user) => user.id === pedido.usuario_id // Verifica se o usuário corresponde ao ID do pedido
            );
            const nomeUsuario = usuario ? usuario.nome : "Usuário desconhecido"; // Define o nome do usuário ou um valor padrão

            return (
              <tr key={pedido.id}>
                <td>{pedido.id}</td> {/* Exibe o ID do pedido */}
                <td>{nomeUsuario}</td> {/* Exibe o nome do usuário */}
                <td>{pedido.data_hora}</td>{" "}
                {/* Exibe a data e hora do pedido */}
                <td>{pedido.total.toFixed(2)}</td>{" "}
                {/* Exibe o total formatado em duas casas decimais */}
                <td>{pedido.status}</td> {/* Exibe o status do pedido */}
                <td>
                  {/* Botão para editar o pedido */}
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => navigate(`/pedidos/editar/${pedido.id}`)} // Navega para a página de edição do pedido
                  >
                    Editar
                  </button>
                  &nbsp; {/* Espaçamento entre os botões */}
                  {/* Botão para excluir o pedido */}
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => excluirItem(pedido.id)} // Chama a função para excluir o pedido
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

export default Pedidos; // Exporta o componente para ser utilizado em outras partes do aplicativo
