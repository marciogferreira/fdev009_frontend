import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">KadoshStore</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse  d-flex justify-content-between" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/produtos" className="nav-link">Produtos</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/produtos" className="nav-link">Por Categorias</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/produtos" className="nav-link">Mais Vendidos</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/produtos" className="nav-link">Novidades</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-end">
                        <li>
                            <Link to="/login" className="nav-link">Login</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}