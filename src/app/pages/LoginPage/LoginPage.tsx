import './styles.css'; 

import { GoogleLogin } from '@/shared/ui/Google/GoogleLogin/GoogleLogin';

function LoginPage() {
    return (
        <div className="login-container">
            <div className="login-form-container">
                <h2>Войти в приложение</h2>
                <GoogleLogin/>
            </div>
        </div>
    );
}

export default LoginPage;