import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '@/components/App/App'
import { Provider } from 'react-redux'
import { store } from '@/store'
import { ThemeProvider } from 'styled-components'

let theme = {
        bg: '#f9fafc',
    }

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </Provider>
    </StrictMode>
)
