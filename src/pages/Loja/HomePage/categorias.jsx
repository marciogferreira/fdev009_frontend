import { Link } from "react-router-dom"; // <- adicione isso no topo
import produto1 from '../../../assets/produto1.png';
import produto2 from '../../../assets/produto2.png';
import produto3 from '../../../assets/produto3.png';
import produto4 from '../../../assets/produto4.png';

export default function CategoriasPage() {

  const categorias = [
    { nome: "Hambúrgueres", img: "https://dummyimage.com/450x300/e71663/e71663.jpg", overlay: produto1 },
    { nome: "Blusas Unissex", img: "https://dummyimage.com/450x300/e71663/e71663.jpg", overlay: produto2 },
    { nome: "Fones de Ouvido", img: "https://dummyimage.com/450x300/e71663/e71663.jpg", overlay: produto3 },
    { nome: "Toalhas", img: "https://dummyimage.com/450x300/e71663/e71663.jpg", overlay: produto4 }
  ];

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

      {/* Seção de Categorias */}
      <div className="container mt-5 pt-5">
        <h2 className="mb-4 text-center">Categorias</h2>
        <div className="row">
          {categorias.map((categoria, index) => (
            <div key={index} className="col-md-3">
              <div className="card shadow">
                <div className="position-relative product-img-container">
                  <img
                    src={categoria.img}
                    className="card-img-top"
                    alt={`Categoria ${categoria.nome}`}
                  />
                  {categoria.overlay && (
                    <img
                      src={categoria.overlay}
                      alt="Overlay"
                      className="overlay-image"
                    />
                  )}
                </div>
                <div className="card-body">
                  <h5 className="card-title text-center">{categoria.nome}</h5>
                  <p className="card-text text-center">
                    Confira  {categoria.nome.toLowerCase()} da nossa loja.
                  </p>
                </div>
              </div>
            </div>
          ))}
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
