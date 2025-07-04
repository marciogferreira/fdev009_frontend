import React, { useState, useEffect, useContext } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../../assets/Kabur-2vKWK/fonts.css";
import Api from '../../../config/Api'
import LayoutPublic from "../../../layouts/LayoutPublic";
import { CarrinhoContext } from "../../../contexts/CarrinhoContext";

export default function HomePage() {
  
  const { carrinho, setCarrinho } = useContext(CarrinhoContext);
  const [tamanhoSelecionado, setTamanhoSelecionado] = useState({});
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);
  const [quantidade, setQuantidade] = useState(1);
  const [modalCarrinho, setModalCarrinho] = useState(false);
  const [produtos, setProdutos] = useState([]);

  async function getProdutos() {
    const response = await Api.get('public/produtos');
    setProdutos(response.data);
  }

  useEffect(() => {
    getProdutos()
  }, []);


  return (
    <LayoutPublic>
    
      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
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
              <img src="/banner1.png" className="d-block" alt="Banner PNG" style={{ width: "100%", height: "500px", objectFit: "contain", backgroundColor: "#8f4af7" }} />
              <div className="carousel-Kabur-2vKWK" style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "white",
                fontSize: "7vw",
                fontWeight: "bold",
                textAlign: "center",
                width: "100%",
                fontFamily: "'Kabur-2vKWK', sans-serif"
              }}>
                Kardoshstore.com.br
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div style={{ textAlign: "center", position: "relative" }}>
              <img src="/banner2.png" className="d-block" alt="Banner PNG" style={{ width: "100%", height: "500px", objectFit: "contain", backgroundColor: "#8f4af7" }} />
              <div className="carousel-Kabur-2vKWK" style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "white",
                fontSize: "7vw",
                fontWeight: "bold",
                textAlign: "center",
                width: "100%",
                fontFamily: "'Kabur-2vKWK', sans-serif"
              }}>
                Kardoshstore.com.br
              </div>
            </div>
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>

      <section className="py-5">
        <div className="container">
          <div className="row">
            
            {produtos.map((produto) => (
              <div key={produto.id} className="col-md-3">
                <div className="card">
                  <div className="card-img-container">
                    <img className="background-img" src={`src/assets/${produto.img}`} alt="Fundo" />
                    {produto.overlay && (
                      <img className="overlay-img" src={produto.overlay} alt={produto.nome} />
                    )}
                  </div>
                  <div className="card-body text-center">
                  <h5 className="fw-bolder">{produto.nome}</h5>
                  <p>R$ {Number(produto.preco).toFixed(2)}</p>
                  <p>Estoque: {produto.quantidadeDisponivel}</p>

                  {produto.tamanhos && (
                    <div className="mb-2">
                      <small>Escolha o tamanho:</small>
                      <div className="d-flex justify-content-center flex-wrap">
                        {/* {produto.tamanhos.map((tamanho) => ( */}
                        {['P', 'M', 'G', 'GG'].map((tamanho) => ( 
                          <button
                            key={tamanho}
                            className={`btn btn-sm ${tamanhoSelecionado[produto.id] === tamanho ? "btn-primary" : "btn-outline-primary"} me-1 mb-1`}
                            onClick={() => setTamanhoSelecionado((prev) => ({ ...prev, [produto.id]: tamanho }))}
                          >
                            {tamanho}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  <button className="btn btn-outline-dark" onClick={() => adicionarAoCarrinho(produto)}>
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
              <div className="modal-header" style={{ backgroundColor: "#8f4af7", color: "white", borderBottom: "none" }}>
                <h5 className="modal-title">{produtoSelecionado.nome}</h5>
                <button type="button" className="btn-close" style={{ filter: "invert(1)" }} onClick={() => setProdutoSelecionado(null)}></button>
              </div>
              <div className="modal-body">
                <p><strong>Preço unitário:</strong> R$ {Number(produtoSelecionado.preco).toFixed(2)}</p>
                {/* Se produto exige seleção de tamanho */}
                {produtoSelecionado.id === 2 && produtoSelecionado.tamanhos && (
                  <div className="mt-3">
                    <label>Selecione o tamanho:</label>
                    <div>
                      {produtoSelecionado.tamanhos.map((tamanho) => (
                        <button 
                          key={tamanho}
                          className={`btn ${tamanhoSelecionado[2] === tamanho ? "btn-primary" : "btn-outline-primary"} me-2`}
                          onClick={() => setTamanhoSelecionado({ 2: tamanho })}
                        >
                          {tamanho}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <button className="btn bg-transparent border-0 p-0 fs-4" onClick={() => atualizarQuantidade(quantidade - 1)}>-</button>
                  <span>Quantidade: {quantidade}</span>
                  <button className="btn bg-transparent border-0 p-0 fs-4" onClick={() => atualizarQuantidade(quantidade + 1)}>+</button>
                </div>
                <p className="mt-3">Total: R${(produtoSelecionado.preco * quantidade).toFixed(2)}</p>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setProdutoSelecionado(null)}>Cancelar</button>
                <button className="btn btn-primary" onClick={adicionarProdutoAoCarrinho}>Adicionar ao Carrinho</button>
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
              <div className="modal-header" style={{ backgroundColor: "#e71663", color: "white", borderBottom: "none" }}>
                <h5 className="modal-title">Carrinho</h5>
                <button type="button" className="btn-close" onClick={() => setModalCarrinho(false)}></button>
              </div>
              <div className="modal-body">
                {carrinho.length === 0 ? (
                  <p>O carrinho está vazio</p>
                ) : (
                  <ul className="list-group">
                    {carrinho.map((item) => (
                      <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center" style={{ border: "none" }}>
                        <div>
                          {item.nome} {item.tamanho && `(${item.tamanho})`} - {item.quantidade}x R${Number(item.preco).toFixed(2)}
                        </div>
                        <button className="btn btn-sm" onClick={() => removerProdutoCarrinho(item)} style={{ background: "none", border: "none", padding: 0 }}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-trash" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 5h4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5v-7z" />
                            <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1 0-2h3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1h3a1 1 0 0 1 1 1zm-2 1H3v9a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4z" />
                          </svg>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="modal-footer">
                <button className="btn btn-primary">Finalizar Compra</button>
              </div>
            </div>
          </div>
        </div>
      )}

    </LayoutPublic>
  );
};



