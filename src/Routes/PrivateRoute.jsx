import { use } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate, useLocation } from "react-router";
import Loader from "../components/Loader";

const PrivateRoute = ({ children }) => {
    const {user, loading} = use(AuthContext);

    const location = useLocation();
    // console.log(location)

    if(loading){
        return <Loader></Loader>
    }

    if(user && user?.email){
        return children
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>

}

export default PrivateRoute;