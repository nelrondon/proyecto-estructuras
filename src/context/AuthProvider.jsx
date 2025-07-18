import { AuthContext } from "./AuthContext"
import { useState } from "react"

import { registerUser } from "../api/auth"

export const AuthProvider = ({children}) =>{
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const signup = async (data) =>{
    const res = await registerUser(data);
    setUser(res.data);
    setIsAuthenticated(true);
  }

  return (
    <AuthContext.Provider value={{
      user,
      signup,
      isAuthenticated
    }}>
      {children}
    </AuthContext.Provider>
  )
}