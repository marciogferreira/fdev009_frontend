import { Link } from "react-router-dom";

export default function Novidades() {
  return (
    <>
      {/* Menu de Navegação */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">KadoshStore</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
              <li className="nav-item"><Link to="/produtos" className="nav-link">Produtos</Link></li>
              <li className="nav-item"><Link to="/categorias" className="nav-link">Por Categorias</Link></li>
              <li className="nav-item"><Link to="/mais-vendidos" className="nav-link">Mais Vendidos</Link></li>
              <li className="nav-item"><Link to="/novidades" className="nav-link active">Novidades</Link></li>
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
          {/* Card 1 - Nova Chegada */}
          <div className="col-md-6">
            <div className="card mb-4">
              <img src="https://via.placeholder.com/500x300" className="card-img-top" alt="Nova Chegada 1" />
              <div className="card-body">
                <h5 className="card-title">Nova Chegada 1 - Inovação no Mercado</h5>
                <p className="card-text">Acabamos de lançar este produto revolucionário, não perca a chance de conhecer mais!</p>
              </div>
            </div>
          </div>

          {/* Card 2 - Nova Chegada */}
          <div className="col-md-6">
            <div className="card mb-4">
              <img src="https://via.placeholder.com/500x300" className="card-img-top" alt="Nova Chegada 2" />
              <div className="card-body">
                <h5 className="card-title">Nova Chegada 2 - O Futuro Está Aqui</h5>
                <p className="card-text">Este é o produto do futuro! Conheça a nova tendência de tecnologia em nossa loja.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}