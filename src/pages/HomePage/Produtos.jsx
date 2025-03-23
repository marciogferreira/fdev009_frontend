import { Link } from "react-router-dom";

export default function Produtos() {
  return (
    <div className="container mt-5 pt-5">
      <h2 className="mb-4 text-center">Nossos Produtos</h2>
      <div className="row">
        {[1, 2, 3, 4].map((id) => (
          <div key={id} className="col-md-3">
            <div className="card">
              <img
                src="https://via.placeholder.com/150"
                className="card-img-top"
                alt={`Produto ${id}`} // O comentário deve estar no formato correto
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
  );
}
