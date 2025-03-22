import { createContext, useState } from "react";
import MainRoutes from "./routes/MainRoutes"

export const AuthContext = createContext({
    isLogged: false,
    setIsLogged: () => {}
});

function App() {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <AuthContext.Provider value={{ isLogged, setIsLogged }}>
      <MainRoutes />
    </AuthContext.Provider>
  )
}
export default App
