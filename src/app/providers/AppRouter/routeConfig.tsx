import { RouteProps } from "react-router-dom";

import { LoginPage, MainPage } from "@/app/pages";

export enum AppRoutes {
    MAIN = 'main',
    SIGN_IN = 'sign-in',
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
};