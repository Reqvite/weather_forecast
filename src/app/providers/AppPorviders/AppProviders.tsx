import { ReactNode } from 'react'
import { BrowserRouter } from 'react-router-dom'

import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'
import { GoogleProvider } from '../GoogleProvider/GoogleProvider'

type AppProvidersProps = {
    children: ReactNode
}

export const AppProviders = ({children}: AppProvidersProps) => {
    return (
        <GoogleProvider>
            <BrowserRouter>
                <ErrorBoundary>
                    {children}
                </ErrorBoundary>
            </BrowserRouter>
        </GoogleProvider>
    )
}