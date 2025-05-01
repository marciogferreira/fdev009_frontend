import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function Novidades() {
  return (
    <>
      <nav className="navbar navbar-expand-lg custom-navbar">                 
        <div className="container-fluid">
          <a className="navbar-brand" href="#">KardoshStore</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
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
          </div>
        </div>
      </nav>

      {/* Seção de Novidades */}
      <div className="container mt-5">
        <h2 className="mb-4 text-center">Novidades</h2>
        <div className="row">
          {/* Card 1 - Nova Chegada com overlay */}
          <div className="col-md-6">
            <div className="card mb-4">
              <div className="position-relative product-img-container">
                <img src="https://dummyimage.com/450x300/e71663/e71663.jpg" className="card-img-top" alt="Nova Chegada 1" />
                <img src="src/assets/produto1.png" alt="Overlay Produto" className="overlay-image" />
              </div>
              <div className="card-body">
                <h5 className="card-title">Nova Chegada 1 - Inovação no Mercado</h5>
                <p className="card-text">Acabamos de lançar Hambúrguer pimentado, não perca a chance de conhecer mais!</p>
              </div>
            </div>
          </div>

          {/* Card 2 - Nova Chegada (sem overlay) */}
          <div className="col-md-6">
            <div className="card mb-4">
            <div className="position-relative product-img-container">
              <img src="https://dummyimage.com/600x400/e71663/e71663.jpg" className="card-img-top" alt="Nova Chegada 2" />
              <img src="src/assets/produto2.png" alt="Overlay Produto" className="overlay-image" />
              </div>
              <div className="card-body">
              <h5 className="card-title">Nova Chegada 2 - Novos modelos.</h5>
              <p className="card-text">Este é o produto é ideal para academias! Conheça a nova tendência de roupas em nossa loja.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white py-4 mt-5">
        <div className="container text-center">
          <p className="mb-1">© {new Date().getFullYear()} FDEV009. Todos os direitos reservados.</p>
          <p className="mb-0">Desenvolvido por A.Dev-Frontend</p>
        </div>
      </footer>
    </>
  );
}
