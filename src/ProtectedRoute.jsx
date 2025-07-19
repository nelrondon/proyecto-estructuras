import { Loading } from "./components/Loading";
import { useAuth } from "./context/AuthContext";

import { Outlet, Navigate } from "react-router-dom";

export const ProtectedRoute = () => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) return <Loading />;
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return <Outlet />;
};
