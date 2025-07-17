import { Routes, Route, Navigate } from 'react-router-dom'

import {Header} from './components/Header.jsx'
import { SearchPage } from './pages/SearchPage.jsx'
import { PropertyDetails } from './pages/PropertyDetails.jsx'

const HomePage = ()=>{
  return <h1 className='main-title'>Pagina de Inicio</h1>
}
const LoginPage = ()=>{
  return <h1 className='main-title'>Inicio de Sesión</h1>
}
const RegisterPage = ()=>{
  return <h1 className='main-title'>Resgistrate</h1>
}
const HistoryPage = ()=>{
  return <h1 className='main-title'>Historial</h1>
} 
const LikedPage = ()=>{
  return <h1 className='main-title'>Mis Favoritos</h1>
} 

function App() {
  return (
    <>
      <Header/>
      <main>
        <Routes>
          <Route path='/' element={<Navigate to='/home' replace />} />

          <Route path='/home' element={<HomePage/>}/>
          <Route path='/search-page' element={<SearchPage/>}/>

          <Route path='/properties/:id' element={<PropertyDetails/>}/>

          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
          <Route path='/history' element={<HistoryPage/>}/>
          <Route path='/likes' element={<LikedPage/>}/>
        </Routes>
      </main>
    </>
  )
}

export default App
