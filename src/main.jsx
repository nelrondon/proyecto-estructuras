import { createRoot } from 'react-dom/client'
import './index.css'
import Miapp from './App.jsx'

import { Background } from './components/Background.jsx'


createRoot(document.getElementById('root')).render(
  <>
    <Background />
    <Miapp />
  </>
)
