import { Link } from "react-router-dom";
import './app.css';
import produto1 from '../../../assets/produto1.png';
import produto2 from '../../../assets/produto2.png';
import produto3 from '../../../assets/produto3.png';
import produto4 from '../../../assets/produto4.png';
import LayoutPublic from '../../../layouts/LayoutPublic'

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
    <LayoutPublic>
      <div className="container">
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
      </div>
    </LayoutPublic>
  );
}
