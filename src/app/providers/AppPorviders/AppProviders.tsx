import { ReactNode } from 'react'

import { GoogleProvider } from '../GoogleProvider/GoogleProvider'

type AppProvidersProps = {
    children: ReactNode
}

export const AppProviders = ({children}: AppProvidersProps) => {
    return (
        <GoogleProvider>
            {children}
        </GoogleProvider>
    )
}