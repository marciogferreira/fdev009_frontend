import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">KardoshStore</a>
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
                <Link to="/categorias" className="nav-link">Por Categorias</Link>
              </li>
              <li className="nav-item">
                <Link to="/mais-vendidos" className="nav-link">Mais Vendidos</Link>
              </li>
              <li className="nav-item">
                <Link to="/novidades" className="nav-link">Novidades</Link>
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
      
      <div className="container mt-5 pt-5">
        <h2 className="mb-4 text-center">Nossos Produtos</h2>
        <div className="row">
          {[1, 2, 3, 4].map((id) => (
            <div key={id} className="col-md-3">
              <div className="card">
                <img
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  className="card-img-top"
                  alt={`Produto ${id}`}
                />
                <div className="card-body">
                  <h5 className="card-title">Produto {id}</h5>
                  <p className="card-text">Descrição breve do produto {id}.</p>
                  <Link to={`/produto/${id}`} className="btn btn-primary">
                    Ver Detalhes
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
