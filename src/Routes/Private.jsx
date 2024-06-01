import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";



const Private = ({children}) => {
    const location = useLocation();
    const {user, loading} = useContext(AuthContext)

    if(loading){
        return <div className="mx-auto">
            <span className="loading loading-dots loading-xs"></span>
<span className="loading loading-dots loading-sm"></span>
<span className="loading loading-dots loading-md"></span>
<span className="loading loading-dots loading-lg"></span>
        </div>
    }
    
    if(user){
        return children
    }
    return (
       <Navigate state={location?.pathname || '/'} to='/login'></Navigate>
    );
};

export default Private;