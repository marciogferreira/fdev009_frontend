import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/Loja/HomePage";  
import Produtos from "../pages/Loja/HomePage/Produtos";  
import MaisVendidos from "../pages/Loja/HomePage/MaisVendidos";  
import Novidades from "../pages/Loja/HomePage/Novidades";  {/* Adicionada a importação */}
import LoginPage from "../pages/Loja/LoginPage";
import Carrinho from "../pages/Loja/Carrinho";
import Contatos from "../pages/Loja/Contatos";
import PagamentoPage from "../pages/Loja/PagamentoPage";
import CategoriasPage from "../pages/Loja/HomePage/Categorias";

export default function PublicRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/produtos" element={<Produtos />} />
      <Route path="/categorias" element={<CategoriasPage />} />
      <Route path="/mais-vendidos" element={<MaisVendidos />} />
      <Route path="/novidades" element={<Novidades />} />  {/* Adicionada a rota */}
      <Route path="/carrinho" element={<Carrinho />} />
      <Route path="/contatos" element={<Contatos />} />
      <Route path="/pagamento" element={<PagamentoPage />} />
    </Routes>
  );
}
