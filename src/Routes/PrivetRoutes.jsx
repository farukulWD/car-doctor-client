import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoutes = ({children}) => {
    const {user,loader}=useContext(AuthContext)
    const location =useLocation()
    if(loader){
        return (
            <progress className="progress mx-auto w-56"></progress>
        );
    }

    if(user?.email){
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    
};

export default PrivetRoutes;