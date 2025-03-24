import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../App";

export default function Menu() {

  const { setIsLogged } = useContext(AuthContext)
  const navigate = useNavigate();

  function logout() {
    setIsLogged(false)
    navigate('/')
  }

  return (
    <>
      <nav
        className="navbar navbar-expand-sm bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <Link to="#">
            <img
              src="./src/layouts/img/iw_branca.png"
              alt="Logo IW"
              width="90"
              height="60"
              className="d-inline-block align-items-center me-3"
            ></img>
          </Link>
          <a className="navbar-brand" href="#">
            IWStore
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active">
                  Painel
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/produtos" className="nav-link active">
                  Produtos
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/categorias" className="nav-link active">
                  Categorias
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Financeiro" className="nav-link active">
                  Financeiro
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/pedidos" className="nav-link active">
                  Pedidos
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/usuarios" className="nav-link active">
                  Usuários
                </Link>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link" onClick={() => logout()}>Sair</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
