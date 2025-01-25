import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@mui/material'
import { theme } from './style/Theme.ts'
import { Provider } from 'react-redux'
import store from './store/store.ts'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
    <ThemeProvider theme={theme}>
    <BrowserRouter>
    <App />
      <ToastContainer />
    </BrowserRouter>
    </ThemeProvider>
    </Provider>
  </StrictMode>,
)
