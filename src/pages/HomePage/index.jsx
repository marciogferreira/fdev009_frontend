import React, { useState } from "react";
import { Link } from "react-router-dom";
//import "bootstrap/dist/css/bootstrap.min.css";
//import "bootstrap/dist/js/bootstrap.bundle.min.js";

const produtos = [
  {
    id: 1,
    nome: "Produto 1",
    preco: 50,
    img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
  },
  {
    id: 2,
    nome: "Produto 2",
    preco: 75,
    img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
  },
  {
    id: 3,
    nome: "Produto 3",
    preco: 100,
    img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
  },
  {
    id: 4,
    nome: "Produto 4",
    preco: 120,
    img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
  },
];

export default function HomePage() {
  const [carrinho, setCarrinho] = useState([]);
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);
  const [quantidade, setQuantidade] = useState(1);
  const [modalCarrinho, setModalCarrinho] = useState(false);

  const adicionarAoCarrinho = (produto) => {
    setProdutoSelecionado(produto);
    setQuantidade(1);
  };

  const atualizarQuantidade = (valor) => {
    if (valor > 0) setQuantidade(valor);
  };

  const adicionarProdutoAoCarrinho = () => {
    setCarrinho((prev) => {
      const itemExistente = prev.find(
        (item) => item.id === produtoSelecionado.id
      );
      if (itemExistente) {
        return prev.map((item) =>
          item.id === produtoSelecionado.id
            ? { ...item, quantidade: item.quantidade + quantidade }
            : item
        );
      } else {
        return [...prev, { ...produtoSelecionado, quantidade }];
      }
    });
    setProdutoSelecionado(null);
  };

  const removerProdutoCarrinho = (produto) => {
    setCarrinho((prev) => prev.filter((item) => item.id !== produto.id));
  };

  const calcularTotal = () => {
    return carrinho
      .reduce((total, item) => total + item.preco * item.quantidade, 0)
      .toFixed(2);
  };

  const quantidadeTotal = carrinho.reduce(
    (total, item) => total + item.quantidade,
    0
  );

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            KardoshStore
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-flex justify-content-between">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/produtos" className="nav-link">
                  Produtos
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/categorias" className="nav-link">
                  Por Categorias
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/mais-vendidos" className="nav-link active">
                  Mais Vendidos
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/novidades" className="nav-link">
                  Novidades
                </Link>
              </li>
              <li>
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>
            </ul>
            <button
              className="btn position-relative"
              onClick={() => setModalCarrinho(true)}
            >
              🛒
              <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">
                {quantidadeTotal}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Carrossel */}
      <div
        id="carouselExample"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {/* Primeiro item do carrossel */}
          <div className="carousel-item active">
            <div style={{ textAlign: "center", position: "relative" }}>
              <img
                src="/banner1.png"
                className="d-block"
                alt="Banner PNG"
                style={{
                  width: "100%",
                  height: "500px",
                  margin: "0 auto",
                  objectFit: "contain",
                }}
              />
              {/* Texto sobre a imagem */}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "10%", // Move o texto para a esquerda
                  transform: "translateY(-50%)", // Alinha verticalmente ao centro
                  color: "black", // Cor do texto
                  fontSize: "2rem",
                  fontWeight: "bold",
                }}
              >
                Kardoshstore.com.br
              </div>
            </div>
          </div>

          {/* Segundo item do carrossel */}
          <div className="carousel-item">
            <div style={{ textAlign: "center", position: "relative" }}>
              <img
                src="/banner1.png"
                className="d-block"
                alt="Banner PNG"
                style={{
                  width: "100%",
                  height: "500px",
                  margin: "0 auto",
                  objectFit: "contain",
                }}
              />
              {/* Texto sobre a imagem */}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "10%", // Move o texto para a esquerda
                  transform: "translateY(-50%)", // Alinha verticalmente ao centro
                  color: "#black", // Cor do texto
                  fontSize: "2rem",
                  fontWeight: "bold",
                }}
              >
                Kardoshstore.com.br
              </div>
            </div>
          </div>
        </div>

        {/* Botões de navegação do carrossel */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
        </button>
      </div>

      <section className="py-5">
        <div className="container">
          <div className="row">
            {produtos.map((produto) => (
              <div key={produto.id} className="col-md-3">
                <div className="card">
                  <img
                    className="card-img-top"
                    src={produto.img}
                    alt={produto.nome}
                  />
                  <div className="card-body text-center">
                    <h5 className="fw-bolder">{produto.nome}</h5>
                    <p>R${produto.preco.toFixed(2)}</p>
                    <button
                      className="btn btn-outline-dark"
                      onClick={() => adicionarAoCarrinho(produto)}
                    >
                      Adicionar ao Carrinho
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {produtoSelecionado && (
        <div className="modal fade show" style={{ display: "block" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{produtoSelecionado.nome}</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setProdutoSelecionado(null)}
                ></button>
              </div>
              <div className="modal-body">
                <p>Preço unitário: R${produtoSelecionado.preco.toFixed(2)}</p>
                <div className="d-flex justify-content-between">
                  <button
                    className="btn btn-secondary"
                    onClick={() => atualizarQuantidade(quantidade - 1)}
                  >
                    -
                  </button>
                  <span>Quantidade: {quantidade}</span>
                  <button
                    className="btn btn-secondary"
                    onClick={() => atualizarQuantidade(quantidade + 1)}
                  >
                    +
                  </button>
                </div>
                <p className="mt-3">
                  Total: R${(produtoSelecionado.preco * quantidade).toFixed(2)}
                </p>
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={() => setProdutoSelecionado(null)}
                >
                  Cancelar
                </button>
                <button
                  className="btn btn-primary"
                  onClick={adicionarProdutoAoCarrinho}
                >
                  Adicionar ao Carrinho
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {modalCarrinho && (
        <div className="modal fade show" style={{ display: "block" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Carrinho</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setModalCarrinho(false)}
                ></button>
              </div>
              <div className="modal-body">
                {carrinho.length === 0 ? (
                  <p>O carrinho está vazio</p>
                ) : (
                  <ul>
                    {carrinho.map((item) => (
                      <li key={item.id}>
                        {item.nome} - {item.quantidade}x R$
                        {item.preco.toFixed(2)}
                      </li>
                    ))}
                  </ul>
                )}
                <p>Total: R${calcularTotal()}</p>
              </div>
              <div className="modal-footer">
                <button className="btn btn-primary">Finalizar Compra</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
