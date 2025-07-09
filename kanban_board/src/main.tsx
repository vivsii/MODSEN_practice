import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '@/App'
import { Provider } from 'react-redux'
import { store } from '@/store'
import { ThemeProvider } from 'styled-components'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </StrictMode>
)
