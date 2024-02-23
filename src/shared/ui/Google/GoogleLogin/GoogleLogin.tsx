import { GoogleCredentialResponse, GoogleLogin as GoogleLoginButton } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

import { storageApi } from '@/shared/packages/storage/storage';
import { StorageKey } from '@/shared/types/storage';
import { User } from '@/shared/types/user';


export const GoogleLogin = () => {
    const login = (credentialResponse: GoogleCredentialResponse) => {
        if (credentialResponse.credential) {
            const user = jwtDecode<User>(credentialResponse.credential)
            storageApi.set(StorageKey.USER, user.email)   
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



