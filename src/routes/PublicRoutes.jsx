import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";  // Certifique-se de importar a HomePage corretamente
import Produtos from "../pages/HomePage/Produtos";  // Ajuste no caminho para Produtos
import LoginPage from "../pages/LoginPage";
import Carrinho from "../pages/Carrinho";
import Contatos from "../pages/Contatos";
import PagamentoPage from "../pages/PagamentoPage";

export default function PublicRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/produtos" element={<Produtos />} />  {/* Corrigido */}
      <Route path="/carrinho" element={<Carrinho />} />
      <Route path="/contatos" element={<Contatos />} />
      <Route path="/pagamento" element={<PagamentoPage />} />  {/* Corrigido */}
    </Routes>
  );
}
