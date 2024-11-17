import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function RefrshHandler({ setIsAuthenticated }) {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            setIsAuthenticated(true);

            // Only redirect to `/welcome` if the user is on specific routes
            if (
                location.pathname === '/' ||
                location.pathname === '/login' ||
                location.pathname === '/home' ||
                location.pathname === '/signup'
            ) {
                navigate('/welcome', { replace: true });
            }
        } else {
            setIsAuthenticated(false);
            // Redirect to `/login` if the user is not authenticated and tries to access a restricted page
            
        }
    }, [location, navigate, setIsAuthenticated]);

    return null;
}

export default RefrshHandler;
