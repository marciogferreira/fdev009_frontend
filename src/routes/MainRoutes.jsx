import { useState } from "react"
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";

export default function MainRoutes() {

    const [isLogged, setIsLogged] = useState(true);

    if(isLogged === false) {
        return <PublicRoutes />
    }

    return <PrivateRoutes />
}