import '../app/styles/App.css'

import { useAuth } from '@/shared/lib/hooks'
import { GoogleLogout } from '@/shared/ui/Google/GoogleLogin/GoogleLogout'

import LoginPage from './pages/LoginPage/LoginPage'

function App() {
    const isAuth = useAuth()
    console.log(isAuth)
    return (
        <>
            {!isAuth ? <LoginPage /> : <GoogleLogout />} 
        </>
    )
}

export default App