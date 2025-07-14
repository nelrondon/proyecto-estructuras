import './Header.css'

import logoSvg from '../assets/logo.svg'

export function Header() {
    return(
      <header>
        <div className="logo">
          <img className='logo-img' src={logoSvg} alt="Imagen logo"/>
          <h1>INMOBI-UDO</h1>
        </div>

        <nav className="menu">
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href ="#">Historial</a></li>
            <li><a href="#">Favoritos</a></li>
          </ul>
        </nav>
      </header>
    )
}
