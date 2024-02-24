import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { useAuth } from '@/shared/lib/hooks';

import { getRouteSignIn,  } from './routeConfig';


interface RequireAuthProps {
    children: ReactNode;
}

export function RequireAuth({ children }: RequireAuthProps) {
    const location = useLocation();
    const {isAuth} = useAuth()

    console.log(isAuth)
    if (!isAuth) {
        return (
            <Navigate to={getRouteSignIn()} state={{ from: location }} replace />
        );
    }

    return children;
}