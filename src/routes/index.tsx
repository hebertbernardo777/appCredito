import { useContext } from "react";
import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";
import { AuthContext } from "../context/auth.context";

function Routes() {

    const authContext = useContext(AuthContext);
    console.log(authContext?.signed)
    console.log('user')
    return (
        authContext?.signed ? <AppRoutes/> : <AuthRoutes/>
   );

}


export default Routes;