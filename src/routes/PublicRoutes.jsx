import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'

export default function PublicRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/produtos" element={<ProdutosPage />} />
            </Routes>
        </BrowserRouter>
    )
}