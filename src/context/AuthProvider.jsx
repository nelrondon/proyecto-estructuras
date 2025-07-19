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
      const { token } = Cookies.get();
      if (token) {
        try {
          const res = await verifyToken(token);
          setUser(res.data);
          setIsAuthenticated(true);
        } catch (e) {
          console.log(e);
          setUser(null);
          setIsAuthenticated(false);
        }
      } else {
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
