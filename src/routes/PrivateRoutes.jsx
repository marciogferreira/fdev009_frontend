import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import PainelPage from "../pages/PainelPage";
import Categorias from "../pages/Private/Categorias";   

export default function PrivateRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PainelPage />} />
                <Route path="/categorias" element={<Categorias />} />
            </Routes>
        </BrowserRouter>
    )
}