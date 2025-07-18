import { Routes, Route, Navigate } from 'react-router-dom'

import { Header}  from './components/Header.jsx'
import { SearchPage } from './pages/SearchPage.jsx'
import { PropertyDetailsPage } from './pages/PropertyDetailsPage.jsx'
import { RegisterPage } from './pages/RegisterPage.jsx'
import { HomePage } from './pages/HomePage.jsx'

const LoginPage = ()=>{
  return <h1 className='main-title'>Inicio de Sesión</h1>
}
const ProfilePage = ()=>{
  return <h1 className='main-title'>Perfil de Usuario</h1>
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

          <Route path='/properties/:id' element={<PropertyDetailsPage/>}/>

          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
          <Route path='/profile' element={<ProfilePage/>}/>
        </Routes>
      </main>
    </>
  )
}

export default App
