import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function HomePage() {
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
          </div>
        </div>
      </nav>
      
      <div className="container mt-5 pt-5">
        <h2 className="mb-4 text-center">Nossos Produtos</h2>
        <div className="row">
          {[1, 2, 3, 4].map((id) => {
            const produtoEspecial = {
              nome: "Hambúrguer Artesanal",
              preco: 6.50,
              img: "https://dummyimage.com/450x300/e71663/e71663.jpg",
              overlay: "src/assets/produto1.png" // Corrigido para caminho público
            };

            const isEspecial = id === 1;

            return (
              <div key={id} className="col-md-3">
                <div className="card position-relative">
                  <div className="product-img-container position-relative">
                    <img
                      src={isEspecial ? produtoEspecial.img : "https://dummyimage.com/450x300/e71663/e71663.jpg"}
                      className="card-img-top"
                      alt={isEspecial ? produtoEspecial.nome : `Produto ${id}`}
                    />
                    {isEspecial && (
                      <img
                        src={produtoEspecial.overlay}
                        alt="Overlay"
                        className="overlay-image"
                      />
                    )}
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{isEspecial ? produtoEspecial.nome : `Produto ${id}`}</h5>
                    <p className="card-text">
                      {isEspecial ? `Preço: R$ ${produtoEspecial.preco.toFixed(2)}` : `Descrição breve do produto ${id}.`}
                    </p>
                    <Link to={`/produto/${id}`} className="btn btn-outline-dark">
                      Ver Detalhes
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <footer className="bg-dark text-white py-4 mt-5">
        <div className="container text-center">
          <p className="mb-1">© {new Date().getFullYear()} FDEV009. Todos os direitos reservados.</p>
          <p className="mb-0">Desenvolvido por A.Dev-Frontend</p>
        </div>
      </footer>
    </>
  );
}
