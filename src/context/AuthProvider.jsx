import { AuthContext } from "./AuthContext";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

import { registerUser, loginUser, verifyToken } from "../api/auth";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  const signup = async (data) => {
    const res = await registerUser(data);
    setUser(res.data);
    setIsAuthenticated(true);
  };

  const signin = async (data) => {
    const res = await loginUser(data);
    setUser(res.data);
    setIsAuthenticated(true);
  };

  const logout = () => {
    Cookies.remove("token");
    setUser(null);
    setIsAuthenticated(false);
  };

  useEffect(() => {
    const checkLogin = async () => {
      try {
        const res = await verifyToken();
        setUser(res.data);
        setIsAuthenticated(true);
      } catch (e) {
        console.error(e.message);
        setUser(null);
        setIsAuthenticated(false);
      }
      setLoading(false);
    };
    checkLogin();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        loading,
        signup,
        signin,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
