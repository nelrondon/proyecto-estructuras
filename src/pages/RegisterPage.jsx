import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";

import "./Form.css";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Input, PushError } from "../components/ComponentsForm";
import { Loading } from "../components/Loading";

export const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [apiError, setApiError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { signup } = useAuth();

  const onSubmit = async (data) => {
    setLoading(true);
    setApiError("");
    try {
      await signup(data);
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
      <h1 className="main-title">Registrate</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="user-form card-style">
        {apiError && <PushError error={apiError} />}
        <div className="info">
          <Input
            className={errors.name ? "error" : ""}
            label="Nombre y Apellido"
            name="name"
            placeholder="Juan Perez"
            {...register("name", { required: true })}
          />
          {errors.name && <p className="errors">Ingresa tu nombre</p>}

          <Input
            className={errors.email ? "error" : ""}
            label="Email"
            type="email"
            name="email"
            placeholder="miemail@gmail.com"
            {...register("email", { required: true })}
          />
          {errors.email && <p className="errors">Ingresa un Email</p>}

          <Input
            className={errors.phone ? "error" : ""}
            label="Télefono"
            name="phone"
            placeholder="0412-0000000"
            {...register("phone", { required: true })}
          />
          {errors.phone && <p className="errors">Ingresa tu Télefono</p>}
        </div>
        <div className="credentials">
          <Input
            className={errors.username ? "error" : ""}
            label="Usuario"
            name="username"
            placeholder="miusuario"
            {...register("username", { required: true })}
          />
          {errors.username && (
            <p className="errors">Ingresa tu nombre de usuario</p>
          )}

          <Input
            className={errors.password ? "error" : ""}
            label="Contraseña"
            name="password"
            type="password"
            placeholder="********"
            {...register("password", { required: true })}
          />
          {errors.password && <p className="errors">Ingresa tu contraseña</p>}
        </div>
        <div className="buttons">
          <NavLink to="/login">¿Ya tienes una cuenta? Ingresa...</NavLink>

          <button className="boton">Registrarse</button>
        </div>
      </form>
    </>
  );
};
