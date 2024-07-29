import { useContext } from "react";
import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";
import { AuthContext } from "../context/auth.context";

function Routes() {

    const authContext = useContext(AuthContext);

    return (
        authContext?.signed ? <AppRoutes/> : <AppRoutes/>
   );

}


export default Routes;