import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Components/Loading/Loading';
import auth from './../../firebase.init';

const RequireAuth = ({children}) => {

    const [user, loading] = useAuthState(auth);

    //Back to the location where user came from after login done.. more in login tab.
    const location = useLocation();
    //must be use the loading
    if(loading) {
        return <Loading/>
    }
    //if user not present, redirect to login page
    if (!user) {
        return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default RequireAuth;