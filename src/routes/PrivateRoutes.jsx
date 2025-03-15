import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import PainelPage from "../pages/PainelPage";
import Produtos from "../pages/Private/Produtos";
import Categorias from "../pages/Private/Categorias";
import Financeiro from "../pages/Private/Financeiro";
import Pedidos from "../pages/Private/Pedidos";
import UsuariosPage from "../pages/UsuariosPage";
import UsuariosForm from "../pages/UsuariosPage/UsuariosForm";

export default function PrivateRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PainelPage />} />
        <Route path="/categorias" element={<Categorias />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/Financeiro" element={<Financeiro />} />
        <Route path="/Pedidos" element={<Pedidos />} />
        <Route path="/usuarios" element={<UsuariosPage />} />
        <Route path="/usuarios/novo" element={<UsuariosForm />} />
        <Route path="/usuarios/editar/:id" element={<UsuariosForm />} />
      </Routes>
    </BrowserRouter>
  );
}