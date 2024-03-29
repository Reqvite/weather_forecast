import { RouteProps } from "react-router-dom";

import { LoginPage, MainPage } from "@/pages";

export enum AppRoutes {
    MAIN = 'main',
    SIGN_IN = 'sign-in',
    NOT_FOUND = 'not-found',
}

export type AppRoutesProps = RouteProps & {
    needAuth?: boolean;
};

export const getRouteMain = () => '/';
export const getRouteSignIn = () => '/sign-in';

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.SIGN_IN]: {
        path: getRouteSignIn(),
        element: <LoginPage />,
    },
    [AppRoutes.MAIN]: {
        path: getRouteMain(),
        element: <MainPage />,
        needAuth: true,
    },
    [AppRoutes.NOT_FOUND]: {
        path: '*',
        element: <MainPage />,
    },
};