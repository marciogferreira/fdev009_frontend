import { Routes, Route } from "react-router-dom";
import PainelPage from "../pages/PainelPage";
import Produtos from "../pages/Private/Produtos";
import Categorias from "../pages/Private/Categorias";
import CategoriasForm from "../pages/CategoriasPage/CategoriasForm";
import ProdutosPages from "../pages/ProdutosPage";
import Financeiro from "../pages/Private/Financeiro";
import Pedidos from "../pages/Private/Pedidos";
import UsuariosPage from "../pages/UsuariosPage";
import UsuariosForm from "../pages/UsuariosPage/UsuariosForm";
import PedidosForm from "../pages/Private/Pedidos/PedidosForm";

export default function PrivateRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PainelPage />} />
      <Route path="/categorias" element={<Categorias />} />
      <Route path="/categorias/novo" element={<CategoriasForm />} />
      <Route path="/categorias/editar/:id" element={<CategoriasForm />} />
      <Route path="/produtos" element={<ProdutosPages />} />
      <Route path="/financeiro" element={<Financeiro />} />
      <Route path="/pedidos" element={<Pedidos />} />
      <Route path="/usuarios" element={<UsuariosPage />} />
      <Route path="/usuarios/novo" element={<UsuariosForm />} />
      <Route path="/usuarios/editar/:id" element={<UsuariosForm />} />
      <Route path="/pedidos/novo" element={<PedidosForm />} />
      <Route path="/pedidos/editar/:id" element={<PedidosForm />} />
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  );
}
