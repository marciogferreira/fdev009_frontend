import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import PainelPage from "../pages/PainelPage";
import Produtos from "../pages/Private/Produtos";
import Categorias from "../pages/Private/Categorias";
import Financeiro from "../pages/Private/Financeiro";
import Pedidos from "../pages/Private/Pedidos";

export default function PrivateRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PainelPage />} />
        <Route path="/categorias" element={<Categorias />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/Financeiro" element={<Financeiro />} />
        <Route path="/Pedidos" element={<Pedidos />} />
      </Routes>
    </BrowserRouter>
  );
}