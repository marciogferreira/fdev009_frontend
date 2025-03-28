import { Link } from "react-router-dom";

export default function CategoriasPage() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
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

      {/* Seção de Categorias */}
      <div className="container mt-5 pt-5">
        <h2 className="mb-4 text-center">Categorias</h2>
        <div className="row">
          {[
            { nome: "Roupas", img: "https://via.placeholder.com/150" },
            { nome: "Eletrônicos", img: "https://via.placeholder.com/150" },
            { nome: "Acessórios", img: "https://via.placeholder.com/150" },
            { nome: "Calçados", img: "https://via.placeholder.com/150" }
          ].map((categoria, index) => (
            <div key={index} className="col-md-3">
              <div className="card shadow">
                <img src={categoria.img} className="card-img-top" alt={`Categoria ${categoria.nome}`} />
                <div className="card-body">
                  <h5 className="card-title text-center">{categoria.nome}</h5>
                  <p className="card-text text-center">Confira os melhores {categoria.nome.toLowerCase()} da nossa loja.</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
