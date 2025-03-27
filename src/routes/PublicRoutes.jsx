import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";  
import Produtos from "../pages/HomePage/Produtos";  
import Categorias from "../pages/HomePage/Categorias";  
import MaisVendidos from "../pages/HomePage/MaisVendidos";  
import Novidades from "../pages/HomePage/Novidades";  {/* Adicionada a importação */}
import LoginPage from "../pages/LoginPage";
import Carrinho from "../pages/Carrinho";
import Contatos from "../pages/Contatos";
import PagamentoPage from "../pages/PagamentoPage";

export default function PublicRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/produtos" element={<Produtos />} />
      <Route path="/categorias" element={<Categorias />} />
      <Route path="/mais-vendidos" element={<MaisVendidos />} />
      <Route path="/novidades" element={<Novidades />} />  {/* Adicionada a rota */}
      <Route path="/carrinho" element={<Carrinho />} />
      <Route path="/contatos" element={<Contatos />} />
      <Route path="/pagamento" element={<PagamentoPage />} />
    </Routes>
  );
}
