import { useAuth } from "../context/AuthContext";
import { capitalize } from "../libs/utils";
import { useNavigate } from "react-router-dom";
import {
  Phone,
  User,
  Email,
  Identification,
  UserCircle,
} from "../components/Icons";

import "./ProfilePage.css";

export const ProfilePage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const lastLogin = new Date(user.last_login).toDateString();
  return (
    <>
      <section className="profile-page">
        <div className="user-details">
          <div className="image">
            <UserCircle className="icon xlg" />
          </div>
          <h1 className="main-title">
            Bienvenido, {capitalize(user.name).split(" ")[0]}!
          </h1>
          <p>Ultimo Acceso: {lastLogin}</p>
          <dl className="user-info">
            <div>
              <dt>
                <Identification className="icon" />
                Nombre Completo:
              </dt>
              <dd>{user.name}</dd>
            </div>
            <div>
              <dt>
                <User className="icon" />
                Nombre de Usuario:
              </dt>
              <dd>{user.username}</dd>
            </div>
            <div>
              <dt>
                <Email className="icon" />
                Email:
              </dt>
              <dd>{user.email}</dd>
            </div>
            <div>
              <dt>
                <Phone className="icon" />
                Teléfono:
              </dt>
              <dd>{user.phone}</dd>
            </div>
          </dl>
        </div>
        <div className="user-actions">
          <section className="favorites">
            <h1>Mis Favoritos</h1>
          </section>

          <section className="posts">
            <h1>Mis Publicaciones</h1>
            <button className="boton ghost" onClick={() => navigate("/sell")}>
              Crear Publicación
            </button>
          </section>

          <section className="cta">
            <h1>Acciones</h1>
            <button className="boton ghost">Editar Perfil</button>
            <button className="boton ghost" onClick={() => navigate("/logout")}>
              Cerrar Sesión
            </button>
          </section>
        </div>
      </section>
    </>
  );
};
