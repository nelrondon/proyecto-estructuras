import { Load } from "./Icons";

export const Loading = () => {
  return (
    <>
      <div className="loading">
        <div>
          <Load className="loading-icon" />
          Cargando...
        </div>
      </div>
    </>
  );
};
