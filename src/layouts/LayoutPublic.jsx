import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
export default function LayoutPublic(props) {

    const [carrinho, setCarrinho] = useState(() => {
        const carrinhoSalvo = localStorage.getItem("carrinho");
        return carrinhoSalvo ? JSON.parse(carrinhoSalvo) : [];
    });

    const quantidadeTotal = carrinho.reduce((total, item) => total + item.quantidade, 0);
    return (
        <>
            <nav className="navbar navbar-expand-lg custom-navbar">
            <div className="container-fluid">
            <a className="navbar-brand" href="#">KardoshStore</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                <li className="nav-item"><Link to="/produtos" className="nav-link">Produtos</Link></li>
                <li className="nav-item"><Link to="/categorias" className="nav-link">Por Categorias</Link></li>
                <li className="nav-item"><Link to="/mais-vendidos" className="nav-link">Mais Vendidos</Link></li>
                <li className="nav-item"><Link to="/novidades" className="nav-link">Novidades</Link></li>
                </ul>
                <ul className="navbar-nav d-flex justify-content-end">
                <li><Link to="/login" className="nav-link">Login</Link></li>
                </ul>
                <button className="btn position-relative" onClick={() => setModalCarrinho(true)}>
                🛒
                <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">{quantidadeTotal}</span>
                </button>
            </div>
            </div>
            </nav>   
            {props.children}
            
            {/* Footer */}
            <footer className="bg-dark text-white py-4 mt-5">
                <div className="container text-center">
                    <p className="mb-1">© {new Date().getFullYear()} FDEV009. Todos os direitos reservados.</p>
                    <p className="mb-0">Desenvolvido por A.Dev-Frontend</p>
                </div>
            </footer>
        </>
    );
};



