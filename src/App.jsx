import { createContext, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./routes/MainRoutes";

export const AuthContext = createContext({
  isLogged: false,
  setIsLogged: () => {}
});

function App() {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <div className="app-wrapper">
      <AuthContext.Provider value={{ isLogged, setIsLogged }}>
        <BrowserRouter>
          <MainRoutes />
        </BrowserRouter>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
