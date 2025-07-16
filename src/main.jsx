import { createRoot } from 'react-dom/client'
import './index.css'
import Miapp from './App.jsx'

import { BrowserRouter } from 'react-router-dom'

import { Background } from './components/Background.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
      <Background />
      <Miapp />
    </BrowserRouter>
  </>
)
