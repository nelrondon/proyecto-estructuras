import { useNavigate } from "react-router-dom";

export const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1 className="main-title">Página no encontrada</h1>
      <button onClick={() => navigate("/")} className="boton">
        Volver al Inicio
      </button>
    </>
  );
};
