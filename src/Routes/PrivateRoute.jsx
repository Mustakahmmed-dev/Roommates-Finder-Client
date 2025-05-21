import { use } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate } from "react-router";
import Loader from "../components/Loader";

const PrivateRoute = ({ children }) => {
    const {user, loading} = use(AuthContext);

    if(loading){
        return <Loader></Loader>
    }

    if(user && user?.email){
        return children
    }
    return <Navigate to="/login"></Navigate>

}

export default PrivateRoute;