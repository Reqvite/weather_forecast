import '../app/styles/App.css'

import { Header } from '@/components'

import { AppRouter } from './providers'

function App() {
    return (
        <>
            <Header/>
            <AppRouter/>
        </>
    )
}

export default App