import './app/styles/index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'

import App from '@/app/App.tsx'

import { AppProviders } from './app/providers'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <AppProviders>
            <App />
        </AppProviders>
    </React.StrictMode>,
)
