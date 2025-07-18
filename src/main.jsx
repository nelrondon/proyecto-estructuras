import { createRoot } from 'react-dom/client'
import './index.css'
import Miapp from './App.jsx'

import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthProvider.jsx'
import { Background } from './components/Background.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <AuthProvider>
      <BrowserRouter>
        <Background />
        <Miapp />
      </BrowserRouter>
    </AuthProvider>
  </>
)
