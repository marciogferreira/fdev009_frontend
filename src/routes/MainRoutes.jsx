import { useContext } from "react";
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";
import { AuthContext } from "../App";

export default function MainRoutes() {
  const { isLogged } = useContext(AuthContext);

  if (isLogged === false) {
    return <PublicRoutes />;
  }

  return <PrivateRoutes />;
}
