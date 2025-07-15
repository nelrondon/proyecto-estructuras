import { Routes, Route } from 'react-router-dom'
import {Header} from './components/Header.jsx'

import { SearchPage } from './pages/SearchPage.jsx'

const HomePage = ()=>{
  return <h1>Pagina de Inicio</h1>
}
const LoginPage = ()=>{
  return <h1>Inicio de Sesión</h1>
}
const RegistePage = ()=>{
  return <h1>Resgistrate</h1>
}

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/search-page' element={<SearchPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegistePage/>}/>
      </Routes>
    </>
  )
}

export default App
