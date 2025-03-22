import { BrowserRouter, Route, Routes } from "react-router-dom";
import PainelPage from "../pages/PainelPage";
import Produtos from "../pages/Private/Produtos";
import Categorias from "../pages/Private/Categorias";
import CategoriasPage from "../pages/CategoriasPage";
import CategoriasForm from "../pages/CategoriasPage/CategoriasForm"
import ProdutosPages from '../pages/ProdutosPage';
import Financeiro from "../pages/Private/Financeiro";
import FinanceiroPage from "../pages/Private/Financeiro";
import Pedidos from "../pages/Private/Pedidos";
import UsuariosPage from "../pages/UsuariosPage";
import UsuariosForm from "../pages/UsuariosPage/UsuariosForm";
import PedidosForm from "../pages/Private/Pedidos/PedidosForm";

export default function PrivateRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PainelPage />} />
        <Route path="/categorias" element={<Categorias />} />
        <Route path="/categorias/novo" element={<CategoriasForm />} />
        <Route path="/categorias/editar/:id" element={<CategoriasForm />} />
        <Route path="/produtos" element={<ProdutosPages />} />
        {/* <Route path="/produtos/novo" element={<ProdutosForm />} /> */}
        {/* <Route path="/produtos/editar/:id" element={<ProdutosForm />} /> */}
        <Route path="/Financeiro" element={<Financeiro />} />
        <Route path="/Pedidos" element={<Pedidos />} />
        <Route path="/usuarios" element={<UsuariosPage />} />
        <Route path="/usuarios/novo" element={<UsuariosForm />} />
        <Route path="/usuarios/editar/:id" element={<UsuariosForm />} />
        <Route path="/pedidos/novo" element={<PedidosForm />} />
        <Route path="/pedidos/editar/:id" element={<PedidosForm />} />
        <Route path="*" element={<h1>NOt FOund</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
