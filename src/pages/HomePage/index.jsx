import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//import 'bootstrap/dist/css/bootstrap.min.css';
import "./app.css";
import "../../assets/Kabur-2vKWK/fonts.css";

export default function HomePage() {
  const [estoque, setEstoque] = useState(() => {
    const estoqueSalvo = localStorage.getItem("estoque");
    return estoqueSalvo
      ? JSON.parse(estoqueSalvo)
      : [
          {
            id: 1,
            nome: "Hambúrguer Artesanal",
            preco: 6.5,
            img: "https://dummyimage.com/450x300/e71663/e71663.jpg",
            overlay: "src/assets/produto1.png",
            quantidadeDisponivel: 30,
          },
          {
            id: 2,
            nome: "Produto 2",
            preco: 75,
            img: "https://dummyimage.com/450x300/e71663/e71663.jpg",
            overlay: "",
            quantidadeDisponivel: 0,
          },
          {
            id: 3,
            nome: "Produto 3",
            preco: 100,
            img: "https://dummyimage.com/450x300/e71663/e71663.jpg",
            overlay: "",
            quantidadeDisponivel: 0,
          },
          {
            id: 4,
            nome: "Produto 4",
            preco: 120,
            img: "https://dummyimage.com/450x300/e71663/e71663.jpg",
            overlay: "",
            quantidadeDisponivel: 0,
          },
        ];
  });

  const [carrinho, setCarrinho] = useState(() => {
    const carrinhoSalvo = localStorage.getItem("carrinho");
    return carrinhoSalvo ? JSON.parse(carrinhoSalvo) : [];
  });

  const [tamanhoSelecionado, setTamanhoSelecionado] = useState({});
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);
  const [quantidade, setQuantidade] = useState(1);
  const [modalCarrinho, setModalCarrinho] = useState(false);

  useEffect(() => {
    localStorage.setItem("estoque", JSON.stringify(estoque));
  }, [estoque]);

  useEffect(() => {
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
  }, [carrinho]);

  const adicionarAoCarrinho = (produto) => {
    if (produto.id === 2 && !tamanhoSelecionado[2]) {
      alert("Selecione um tamanho antes de adicionar ao carrinho.");
      return;
    }
    setProdutoSelecionado(produto);
    setQuantidade(1);
  };

  const atualizarQuantidade = (valor) => {
    if (valor > 0) setQuantidade(valor);
  };

  const adicionarProdutoAoCarrinho = () => {
    const produtoId = produtoSelecionado.id;
    const estoqueAtual = estoque.find((p) => p.id === produtoId);

    if (quantidade > estoqueAtual.quantidadeDisponivel) {
      alert("Quantidade solicitada excede o estoque disponível!");
      return;
    }

    const tamanho = produtoId === 2 ? tamanhoSelecionado[2] : null;

    const novoItem = {
      ...produtoSelecionado,
      quantidade,
      tamanho,
    };

    setCarrinho((prev) => {
      const itemExistente = prev.find(
        (item) => item.id === produtoId && item.tamanho === tamanho
      );
      if (itemExistente) {
        return prev.map((item) =>
          item.id === produtoId && item.tamanho === tamanho
            ? { ...item, quantidade: item.quantidade + quantidade }
            : item
        );
      } else {
        return [...prev, novoItem];
      }
    });

    setEstoque((prev) =>
      prev.map((item) =>
        item.id === produtoId
          ? {
              ...item,
              quantidadeDisponivel: item.quantidadeDisponivel - quantidade,
            }
          : item
      )
    );

    setProdutoSelecionado(null);
    if (produtoId === 2) {
      setTamanhoSelecionado((prev) => ({ ...prev, 2: null }));
    }
  };

  const removerProdutoCarrinho = (produto) => {
    setCarrinho((prev) =>
      prev.filter(
        (item) => !(item.id === produto.id && item.tamanho === produto.tamanho)
      )
    );

    setEstoque((prev) =>
      prev.map((item) =>
        item.id === produto.id
          ? {
              ...item,
              quantidadeDisponivel:
                item.quantidadeDisponivel + produto.quantidade,
            }
          : item
      )
    );
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
      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            KardoshStore
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse d-flex justify-content-between"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
                <Link to="/mais-vendidos" className="nav-link">
                  Mais Vendidos
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/novidades" className="nav-link">
                  Novidades
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav d-flex justify-content-end">
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

      <div
        id="carouselExample"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <style>
          {`
            @font-face {
              font-family: 'Kabur-2vKWK';
              src: url('/assets/Kabur-2vKWK/Kabur-2vKWK.woff2') format('woff2');
              font-weight: normal;
              font-style: normal;
            }
          `}
        </style>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <div style={{ textAlign: "center", position: "relative" }}>
              <img
                src="/banner1.png"
                className="d-block"
                alt="Banner PNG"
                style={{
                  width: "100%",
                  height: "500px",
                  objectFit: "contain",
                  backgroundColor: "#8f4af7",
                }}
              />
              <div
                className="carousel-Kabur-2vKWK"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "white",
                  fontSize: "7vw",
                  fontWeight: "bold",
                  textAlign: "center",
                  width: "100%",
                  fontFamily: "'Kabur-2vKWK', sans-serif",
                }}
              >
                Kardoshstore.com.br
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div style={{ textAlign: "center", position: "relative" }}>
              <img
                src="/banner2.png"
                className="d-block"
                alt="Banner PNG"
                style={{
                  width: "100%",
                  height: "500px",
                  objectFit: "contain",
                  backgroundColor: "#8f4af7",
                }}
              />
              <div
                className="carousel-Kabur-2vKWK"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "white",
                  fontSize: "7vw",
                  fontWeight: "bold",
                  textAlign: "center",
                  width: "100%",
                  fontFamily: "'Kabur-2vKWK', sans-serif",
                }}
              >
                Kardoshstore.com.br
              </div>
            </div>
          </div>
        </div>

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
            {estoque.map((produto) => (
              <div key={produto.id} className="col-md-3">
                <div className="card">
                  <div className="card-img-container">
                    <img
                      className="background-img"
                      src={produto.img}
                      alt="Fundo"
                    />
                    {produto.overlay && (
                      <img
                        className="overlay-img"
                        src={produto.overlay}
                        alt={produto.nome}
                      />
                    )}
                  </div>

                  <div className="card-body text-center">
                    <h5 className="fw-bolder">{produto.nome}</h5>
                    <p>R${produto.preco.toFixed(2)}</p>
                    <p>Estoque: {produto.quantidadeDisponivel}</p>
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

      {/* Modal para adicionar produto */}
      {produtoSelecionado && (
        <div className="modal fade show" style={{ display: "block" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div
                className="modal-header"
                style={{
                  backgroundColor: "#8f4af7",
                  color: "white",
                  borderBottom: "none",
                }}
              >
                <h5 className="modal-title">{produtoSelecionado.nome}</h5>
                <button
                  type="button"
                  className="btn-close"
                  style={{ filter: "invert(1)" }}
                  onClick={() => setProdutoSelecionado(null)}
                ></button>
              </div>
              <div className="modal-body">
                <p>
                  <strong>Preço unitário:</strong> R${" "}
                  {produtoSelecionado.preco.toFixed(2)}
                </p>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <button
                    className="btn bg-transparent border-0 p-0 fs-4"
                    onClick={() => atualizarQuantidade(quantidade - 1)}
                  >
                    -
                  </button>
                  <span>Quantidade: {quantidade}</span>
                  <button
                    className="btn bg-transparent border-0 p-0 fs-4"
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

      {/* Modal do Carrinho */}
      {modalCarrinho && (
        <div className="modal fade show" style={{ display: "block" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div
                className="modal-header"
                style={{
                  backgroundColor: "#e71663",
                  color: "white",
                  borderBottom: "none",
                }}
              >
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
                  <ul className="list-group">
                    {carrinho.map((item) => (
                      <li
                        key={item.id}
                        className="list-group-item d-flex justify-content-between align-items-center"
                        style={{ border: "none" }}
                      >
                        <div>
                          {item.nome} - {item.quantidade}x R$
                          {item.preco.toFixed(2)}
                        </div>
                        <button
                          className="btn btn-sm"
                          onClick={() => removerProdutoCarrinho(item)}
                          style={{
                            background: "none",
                            border: "none",
                            padding: 0,
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="black"
                            className="bi bi-trash"
                            viewBox="0 0 16 16"
                          >
                            <path d="M5.5 5.5A.5.5 0 0 1 6 5h4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5v-7z" />
                            <path
                              fillRule="evenodd"
                              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1 0-2h3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1h3a1 1 0 0 1 1 1zm-2 1H3v9a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4z"
                            />
                          </svg>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
                <p className="mt-3">Total: R${calcularTotal()}</p>
              </div>
              <div className="modal-footer">
                <button className="btn btn-primary">Finalizar Compra</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="footer-custom py-4 mt-5">
        <div className="container text-center">
          <p className="mb-1">
            © {new Date().getFullYear()} FDEV009. Todos os direitos reservados.
          </p>
          <p className="mb-0">Desenvolvido por A.Dev-Frontend</p>
        </div>
      </footer>
    </>
  );
}
