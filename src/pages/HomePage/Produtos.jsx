import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import produto1 from '../../assets/produto1.png';
import produto2 from '../../assets/produto2.png';
import produto3 from '../../assets/produto3.png';
import produto4 from '../../assets/produto4.png';


export default function HomePage() {
  const produtos = [
    {
      id: 1,
      nome: "Hambúrguer Artesanal",
      preco: 6.50,
      imagem: produto1
    },
    {
      id: 2,
      nome: "Blusa Unissex",
      preco: 50.00,
      imagem: produto2
    },
    {
      id: 3,
      nome: "Fone de Ouvido",
      preco: 15.00,
      imagem: produto3
    },
    {
      id: 4,
      nome: "Toalha",
      preco: 40.00,
      imagem: produto4
    }
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

      {/* TÍTULO CENTRALIZADO */}
      
      <h2 className="text-center my-4">Nossos Produtos</h2>

      {/* GRID DE PRODUTOS */}
      <div className="row justify-content-center">
        {produtos.map((produto) => (
          <div key={produto.id} className="col-md-3 mb-4">
            <div className="card position-relative h-100">
              <div className="product-img-container position-relative">
                <img
                  src="https://dummyimage.com/450x300/e71663/e71663.jpg"
                  className="card-img-top"
                  alt={produto.nome}
                />
                {produto.imagem && (
                  <img
                    src={produto.imagem}
                    alt={produto.nome}
                    className="overlay-image"
                  />
                )}
              </div>
              <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title">{produto.nome}</h5>
                <p className="card-text">Preço: R$ {produto.preco.toFixed(2)}</p>
                <Link to={`/produto/${produto.id}`} className="btn btn-outline-dark mt-auto">
                  Ver Detalhes
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* RODAPÉ */}
      <footer className="bg-dark text-white py-4 mt-5">
        <div className="container text-center">
          <p className="mb-1">© {new Date().getFullYear()} FDEV009. Todos os direitos reservados.</p>
          <p className="mb-0">Desenvolvido por A.Dev-Frontend</p>
        </div>
      </footer>
    </>
  );
}
