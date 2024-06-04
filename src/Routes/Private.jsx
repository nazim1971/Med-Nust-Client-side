import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import LoadingSpinner from "../components/LoadingSpiner";



const Private = ({children}) => {
    const location = useLocation();
    const {user, loading} = useContext(AuthContext)

    if(loading){
        return <LoadingSpinner/>
    }
    
    if(user){
        return children
    }
    return (
       <Navigate state={location?.pathname || '/'} to='/login'></Navigate>
    );
};

export default Private;