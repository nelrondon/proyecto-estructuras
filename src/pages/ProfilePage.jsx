import { useAuth } from "../context/AuthContext";
import { capitalize } from "../libs/utils";

export const ProfilePage = () => {
  const { user } = useAuth();

  return (
    <>
      <h1 className="main-title">Bienvenido, {capitalize(user.name)}!</h1>
    </>
  );
};
