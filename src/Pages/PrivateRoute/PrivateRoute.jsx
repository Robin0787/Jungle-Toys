import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Navigate, useLocation } from 'react-router-dom';
import LoadingSpinner from '../../Shared/Loading/LoadingSpinner';
import { authContext } from '../AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(authContext);
    const location = useLocation();

    if(loading) {
        return <LoadingSpinner />
    }
    else if(user) {
        return children
    }
    toast.error('Login first to show this');
    return <Navigate to={'/login'} state={{from: location}} replace></Navigate>  
};

export default PrivateRoute;
