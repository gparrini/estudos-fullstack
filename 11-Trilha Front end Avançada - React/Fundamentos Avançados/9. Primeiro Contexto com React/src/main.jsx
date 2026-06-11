import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import { UserProvider } from './context/UserContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Envolve o App com o userProvider para que todos os componentes dentro de App tenham acessoao contexto */}
    <UserProvider>
    <App />
    </UserProvider>
  </StrictMode>,
)
