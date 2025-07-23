import { NavLink } from "react-router-dom";
import logoSvg from "../assets/logo.svg";

import "./Header.css";
import { useAuth } from "../context/AuthContext";

const Link = ({ to, children, ...props }) => {
  return (
    <li>
      <NavLink to={to} {...props}>
        {children}
      </NavLink>
    </li>
  );
};

export const Header = () => {
  const { isAuthenticated } = useAuth();

  return (
    <header>
      <div className="logo">
        <img className="logo-img" src={logoSvg} alt="Imagen logo" />
        <h1>INMOBI-UDO</h1>
      </div>

      <nav className="menu">
        <ul>
          <Link to="/">Inicio</Link>
          <Link to="/explore">Explorar</Link>
          <li></li>
          {!isAuthenticated && <Link to="/login">Iniciar Sesión</Link>}
          {isAuthenticated && <Link to="/profile">Perfil</Link>}
        </ul>
      </nav>
    </header>
  );
};
