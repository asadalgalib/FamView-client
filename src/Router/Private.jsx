import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const Private = ({ children }) => {
    const location = useLocation();
    const { loading, user } = useContext(AuthContext);

    if (loading) {
        return <div className='min-h-screen flex justify-center items-center'><span className="loading loading-spinner text-customGreen"></span></div>
    }
    else if (user) {
        return children;
    }
    return (
        <div>
            <Navigate state={location.pathname} to={'/login'}></Navigate>
        </div>
    );
};

export default Private;