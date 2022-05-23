import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { userContex } from './../../../App';

const PrivateRoute = ({children}) => {
    const [logedInUser] = useContext(userContex);
    const location = useLocation()
    const auth = logedInUser.name || logedInUser.email ; 
    return auth ? children :
     <Navigate to={'/login'} state={{ from: location }} replace /> 
};

export default PrivateRoute;