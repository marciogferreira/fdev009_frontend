import { Link } from "react-router-dom";

export default function MaisVendidos() {
  return (
    <>
      {/* Menu de Navegação */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">KardoshStore</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
              <li className="nav-item"><Link to="/produtos" className="nav-link">Produtos</Link></li>
              <li className="nav-item"><Link to="/categorias" className="nav-link">Por Categorias</Link></li>
              <li className="nav-item"><Link to="/mais-vendidos" className="nav-link active">Mais Vendidos</Link></li>
              <li className="nav-item"><Link to="/novidades" className="nav-link">Novidades</Link></li>
            </ul>
            <ul className="navbar-nav d-flex justify-content-end">
              <li><Link to="/login" className="nav-link">Login</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Seção de Mais Vendidos */}
      <div className="container mt-5">
        <h2 className="mb-4 text-center">Mais Vendidos</h2>
        <div className="row">
          {/* Card 1 - Produto Mais Vendido */}
          <div className="col-md-6">
            <div className="card mb-4">
              <img src="https://via.placeholder.com/500x300" className="card-img-top" alt="Produto 1" />
              <div className="card-body">
                <h5 className="card-title">Produto 1 - Super Vendido</h5>
                <p className="card-text">Este é o produto mais vendido da nossa loja.</p>
                <Link to="/produto/1" className="btn btn-primary">Ver Detalhes</Link>
              </div>
            </div>
          </div>

          {/* Card 2 - Produto Mais Vendido */}
          <div className="col-md-6">
            <div className="card mb-4">
              <img src="https://via.placeholder.com/500x300" className="card-img-top" alt="Produto 2" />
              <div className="card-body">
                <h5 className="card-title">Produto 2 - Best Seller</h5>
                <p className="card-text">Este produto está entre os mais vendidos, aproveite a oferta exclusiva.</p>
                <Link to="/produto/2" className="btn btn-primary">Ver Detalhes</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
