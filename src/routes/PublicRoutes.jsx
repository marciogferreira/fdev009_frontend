import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import Carrinho from "../pages/Carrinho";
import Contatos from "../pages/Contatos";
import PagamentoPage from "../pages/PagamentoPage";
import ProdutosPage from "../pages/ProdutosPage";
import PedidosPage from "../pages/PedidosPage";

export default function PublicRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/ProdutosPage" element={<ProdutosPage />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/contatos" element={<Contatos />} />
        <Route path="/PagamentoPage" element={<PagamentoPage />} />
        <Route path="/PedidosPage" element={<PedidosPage />} />
      </Routes>
    </BrowserRouter>
  );
}
