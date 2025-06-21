import { createContext, useState } from "react";
import { BrowserRouter } from "react-router-dom";  // Importe o BrowserRouter
import MainRoutes from "./routes/MainRoutes";
import CarrinhoProvider from "./contexts/CarrinhoContext";

export const AuthContext = createContext({
    isLogged: false,
    setIsLogged: () => {}
});

function App() {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <AuthContext.Provider value={{ isLogged, setIsLogged }}>
      <CarrinhoProvider>
        <BrowserRouter>  {/* Envolva as rotas com o BrowserRouter */}
          <MainRoutes />
        </BrowserRouter>
      </CarrinhoProvider>
    </AuthContext.Provider>
  );
}

export default App;
