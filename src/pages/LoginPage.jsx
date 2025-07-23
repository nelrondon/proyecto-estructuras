import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Loading } from "../components/Loading";

import { useAuth } from "../context/AuthContext";
import { Input, PushError } from "../components/ComponentsForm";
import "./Form.css";
import { NavLink, useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const [apiError, setApiError] = useState("");
  const [loading, setLoading] = useState(false);

  const { signin } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setLoading(true);
    setApiError("");
    try {
      await signin(data);
      navigate("/profile");
    } catch (e) {
      setApiError(e.response.data.error);
    }
    setLoading(false);
  };

  //! EFECTO PARA LIMPIAR LOS MENSAJES DE ERROR DEL SERVIDOR
  useEffect(() => {
    const timer = setTimeout(() => {
      setApiError("");
    }, 4000);
    return () => {
      clearTimeout(timer);
    };
  }, [apiError]);

  if (loading) return <Loading />;

  return (
    <>
      <h1 className="main-title">Inicia Sesión</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="user-form card-style">
        {apiError && <PushError error={apiError} />}
        <div className="credentials">
          <Input
            className={errors.username ? "error" : ""}
            label="Usuario"
            name="username"
            placeholder="miusuario"
            {...register("username", { required: true })}
          >
            {errors.username && (
              <p className="errors">Ingresa tu nombre de usuario</p>
            )}
          </Input>

          <Input
            className={errors.password ? "error" : ""}
            label="Contraseña"
            name="password"
            type="password"
            placeholder="********"
            {...register("password", { required: true })}
          >
            {errors.password && <p className="errors">Ingresa tu contraseña</p>}
          </Input>
        </div>
        <div className="buttons">
          <NavLink to="/register">¿Aun no tienes cuenta? Regístrate</NavLink>
          <button className="boton">Iniciar Sesión</button>
        </div>
      </form>
    </>
  );
};
