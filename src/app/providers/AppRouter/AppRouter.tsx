import { Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Loader } from '@/shared/ui';

import { RequireAuth } from './RequireAuth';
import { AppRoutesProps, routeConfig } from './routeConfig';

export const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {

        const element = (
            <Suspense fallback={<Loader isOverflow/>}>
                <main>
                    <h1 className="visually-hidden">Weather forecast</h1>
                    {route.element}
                </main>
            </Suspense>
        );

        return (
            <Route
                key={route.path}
                path={route.path}
                element={
                    route.needAuth ? (
                        <RequireAuth>{element}</RequireAuth>
                    ) : (
                        element
                    )
                }
            />
        );
    }, []);

    return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
};