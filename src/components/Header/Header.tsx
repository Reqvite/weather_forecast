import './header.css'

import { Link } from 'react-router-dom'

import { getRouteMain } from '@/app/providers/AppRouter/routeConfig'
import { useAuth } from '@/shared/lib/hooks'
import { GoogleLogout, Text } from '@/shared/ui'


export const Header = () => {
    const { user, isAuth } = useAuth()
    if (!isAuth) {
        return null
    }

    return (
        <header className='header'>
            <Link className='logo' to={getRouteMain()}>Weather forecast</Link>
            <div className='rightBox'>
                <Text bold color='secondary'>{user?.name}</Text>
                {user?.picture && <img className='img' src={user?.picture}/>}
                <GoogleLogout/>
            </div>
        </header>
    )
}

