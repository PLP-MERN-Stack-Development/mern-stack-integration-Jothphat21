// src/context/AuthContext.jsx

import { createContext, useContext, useState, useEffect } from "react";
import { authService } from "../services/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Load user from localStorage on start
  const [user, setUser] = useState(authService.getCurrentUser());

  // Login
  const login = async (credentials) => {
    const data = await authService.login(credentials);

    // user is already stored in localStorage inside api.js
    const savedUser = authService.getCurrentUser();
    setUser(savedUser);
  };

  // Logout
  const logout = () => {
    authService.logout();
    setUser(null);
  };

  // Register (no auto-login)
  const register = async (userData) => {
    await authService.register(userData);
    // user is not logged in yet, so keep user null
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
