import './styles.css'; 

import { GoogleLogin } from '@/shared/ui/Google/GoogleLogin';

function LoginPage() {
    return (
        <div className="login">
            <div className="login__container">
                <h2 className='login__title'>Login to Weather forecast</h2>
                <GoogleLogin/>
            </div>
        </div>
    );
}

export default LoginPage;