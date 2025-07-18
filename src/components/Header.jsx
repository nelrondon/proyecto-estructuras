import { NavLink } from 'react-router-dom'
import logoSvg from '../assets/logo.svg'

import './Header.css'

export function Header() {
    return(
      <header>
        <div className="logo">
          <img className='logo-img' src={logoSvg} alt="Imagen logo"/>
          <h1>INMOBI-UDO</h1>
        </div>

        <nav className="menu">
          <ul>
            <li><NavLink to="/home">Inicio</NavLink></li>
            <li><NavLink to="/search-page">Buscar</NavLink></li>
            <li></li>
            <li><NavLink to="/login">Iniciar Sesión</NavLink></li>
            <li><NavLink to="/register">Registrarse</NavLink></li>
          </ul>
        </nav>
      </header>
    )
}
