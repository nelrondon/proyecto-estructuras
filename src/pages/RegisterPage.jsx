import { useForm } from "react-hook-form"
import { useAuth } from "../context/AuthContext"

import "./RegisterPage.css"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const Input = ({ label, name, className,  ...props})=>{
  return(
    <label htmlFor={name}>
      {label}: <br />
      <input autoComplete="off" type="text" className={`input-effects ${className}`} {...props} name={name} id={name}/>
    </label>
  )
}

const PushError = ({error})=>{
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
    const timer = setTimeout(()=>{
      setShow(false);
    }, 3000)    
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className={show ? "push-error" : "push-error hidden"}>{error}</div>
  )
}


export const RegisterPage = ()=>{
  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm()

  const [apiError, setApiError] = useState("");

  const navigate = useNavigate();

  const { signup } = useAuth();

  const onSubmit = async (data) =>{
      try {
        await signup(data);
        navigate("/profile")
      } catch (e) {
        console.log(e)
        setApiError(e.response.data.error)
      }
  }

  //! EFECTO PARA LIMPIAR LOS MENSAJES DE ERROR DEL SERVIDOR
  useEffect(() => {
    const timer = setTimeout(()=>{
      setApiError("");
    }, 4000)    
    return () => {
      clearTimeout(timer);
    };
  }, [apiError]);

  return (
    <>
      <h1 className='main-title'>Registrate</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="user-form-register card-style">
        {apiError && <PushError error={apiError} />}
        <div className="info">
          <Input 
            className={errors.name ? "error" : ""}
            label="Nombre y Apellido"
            name="name" 
            placeholder="Juan Perez"
            {...register("name", {required: true})}
          />
          {errors.name && <p className="errors">Ingresa tu nombre</p> }

          <Input 
            className={errors.email ? "error" : ""}
            label="Email" 
            type="email" 
            name="email" 
            placeholder="miemail@gmail.com"
            {...register("email", {required: true})}
          />
          {errors.email && <p className="errors">Ingresa un Email</p> }

          <Input 
            className={errors.phone ? "error" : ""}
            label="Télefono" 
            name="phone" 
            placeholder="0412-0000000"
            {...register("phone", {required: true})}
          />
          {errors.phone && <p className="errors">Ingresa tu Télefono</p> }

        </div>
        <div className="credentials">
          <Input 
            className={errors.username ? "error" : ""}
            label="Usuario" 
            name="username" 
            placeholder="miusuario"
            {...register("username", {required: true})}
          />
          {errors.username && <p className="errors">Ingresa tu nombre de usuario</p> }

          <Input 
            className={errors.password ? "error" : ""}
            label="Contraseña" 
            name="password" 
            type="password" 
            placeholder="********"
            {...register("password", {required: true})}
          />
          {errors.password && <p className="errors">Ingresa tu contraseña</p> }

        </div>
        <div className="buttons">
          <button className="boton">Registrarse</button>
        </div>
      </form>
    </>
  )
}