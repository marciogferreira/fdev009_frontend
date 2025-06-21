import { Routes, Route } from "react-router-dom";
import PainelPage from "../pages/Admin/PainelPage";
import Categorias from "../pages/Admin/Categorias";
import CategoriasForm from "../pages/Admin/CategoriasPage/CategoriasForm";
import ProdutosPages from "../pages/Admin/ProdutosPage";
import Financeiro from "../pages/Admin/Financeiro";
import Pedidos from "../pages/Admin/Pedidos";
import UsuariosPage from "../pages/Admin/UsuariosPage";
import UsuariosForm from "../pages/Admin/UsuariosPage/UsuariosForm";
import PedidosForm from "../pages/Admin/Pedidos/PedidosForm";

export default function PrivateRoutes() {
  return (
    <Routes>
      <Route path="/admin/" element={<PainelPage />} />
      <Route path="/admin/categorias" element={<Categorias />} />
      <Route path="/admin/categorias/novo" element={<CategoriasForm />} />
      <Route path="/admin/categorias/editar/:id" element={<CategoriasForm />} />
      <Route path="/admin/produtos" element={<ProdutosPages />} />
      <Route path="/admin/financeiro" element={<Financeiro />} />
      <Route path="/admin/pedidos" element={<Pedidos />} />
      <Route path="/admin/usuarios" element={<UsuariosPage />} />
      <Route path="/admin/usuarios/novo" element={<UsuariosForm />} />
      <Route path="/admin/usuarios/editar/:id" element={<UsuariosForm />} />
      <Route path="/admin/pedidos/novo" element={<PedidosForm />} />
      <Route path="/admin/pedidos/editar/:id" element={<PedidosForm />} />
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  );
}
