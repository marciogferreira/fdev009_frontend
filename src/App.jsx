import { createContext, useState } from "react";
import { BrowserRouter } from "react-router-dom";  // Importe o BrowserRouter
import MainRoutes from "./routes/MainRoutes";

export const AuthContext = createContext({
    isLogged: false,
    setIsLogged: () => {}
});

function App() {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <AuthContext.Provider value={{ isLogged, setIsLogged }}>
      <BrowserRouter>  {/* Envolva as rotas com o BrowserRouter */}
        <MainRoutes />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
