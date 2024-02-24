import { GoogleOAuthProvider } from '@react-oauth/google';
import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

export const GoogleProvider = (props: Props) => {
    const { children} = props;
    return <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>{children}</GoogleOAuthProvider>;
};