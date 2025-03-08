import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import PainelPage from "../pages/PainelPage";
import Produtos from "../pages/Private/Produtos";

export default function PrivateRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PainelPage />} />
                <Route path="/produtos" element={<Produtos />} />
             
            </Routes>
        </BrowserRouter>
    )
}