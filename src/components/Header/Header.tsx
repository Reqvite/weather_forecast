import './header.css'

import { useAuth } from '@/shared/lib/hooks'
import { GoogleLogout, Text } from '@/shared/ui'

export const Header = () => {
    const { user, isAuth } = useAuth()
    if (!isAuth) {
        return null
    }

    return (
        <header className='header'>
            <a className='logo' href='#'>Weather forecast</a>
            <div className='rightBox'>
                <Text bold color='secondary'>{user?.name}</Text>
                {user?.picture && <img className='img' src={user?.picture}/>}
                <GoogleLogout/>
            </div>
        </header>
    )
}

