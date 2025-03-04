import imgCar from "./img/img_car.png";

export default function LoginPage() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="login-container bg-warning p-4 rounded shadow text-center">
        {/* Ícone do Login */}
        <img src={imgCar} alt="Login Icon" className="mb-3" width="90" />
        <h3 className="text-dark">Login Page</h3>

        {/* Formulário */}
        <form>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Usuário"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Senha"
              required
            />
          </div>
          <button type="submit" className="btn btn-dark w-100">
            Login
          </button>
          <a href="#" className="d-block mt-2 text-dark text-decoration-none">
            Esqueceu a senha?
          </a>
        </form>

        {/* Linha divisória */}
        <hr className="text-white my-3" />

        {/* Botão de Login com Google */}
        <button className="btn btn-danger w-100">Acessar com o Google</button>
      </div>
    </div>
  );
}
/* validando usuario e encaminhando para a pagina painelPage */
function logar() {
  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;
  if (usuario === "admin" && senha === "123") {
    window.location.href = "../painelPage";
  } else {
    alert("Usuário ou senha inválidos");
  }
  return false;
}
