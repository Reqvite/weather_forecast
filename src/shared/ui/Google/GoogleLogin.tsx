import { GoogleCredentialResponse, GoogleLogin as GoogleLoginButton } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

import { getRouteMain } from '@/app/providers/AppRouter/routeConfig';
import { useAuth } from '@/shared/lib/hooks';
import { User } from '@/shared/types/user';


export const GoogleLogin = () => {
    const { setUser } = useAuth()
    const navigate = useNavigate()

    const login = (credentialResponse: GoogleCredentialResponse) => {
        if (credentialResponse.credential) {
            const user = jwtDecode<User>(credentialResponse.credential)
            if (user) {
                setUser(user)
                navigate(getRouteMain())
            }
        }
       
    }
    return (
        <GoogleLoginButton
            onSuccess={login}
            onError={() => {
                alert('Login Failed')
            }}
        />
    )
}



