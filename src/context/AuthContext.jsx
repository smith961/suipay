// 

import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

// Create Auth Context
const AuthContext = createContext();

// Auth Provider Component
export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const login = () => {
    setIsAuthenticated(true);
    navigate("/dashboard"); // Redirect to Dashboard after login
  };

  const logout = () => {
    setIsAuthenticated(false);
    navigate("/login"); // Redirect to Login after logout
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use AuthContext
export function useAuth() {
  return useContext(AuthContext);
}
