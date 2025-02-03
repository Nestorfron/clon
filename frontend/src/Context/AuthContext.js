import React, { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [Token, SetToken] = useState()
  const [Name, SetName] = useState()
  const [idUser, SetIdUser] = useState()
  const [Role, SetRole] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("Token");
    if (storedToken) {
      login(storedToken);
    }

  }, [])

  const login = (token, userId) => {
    const decoded = jwtDecode(token);
    const { id, name, role, exp } = decoded;
    localStorage.setItem("Token", token);
    SetToken(token);
    SetIdUser(id);
    SetName(name);
    SetRole(role);
    localStorage.setItem("idUser", token);
    localStorage.setItem("idUser", userId);

    SetIdUser(userId)
    const expirationTime = exp * 1000 - Date.now();

    if (expirationTime > 0) {
      setTimeout(() => {
        logout();
      }, expirationTime);
    } else {
      logout();
    }

  }
  const logout = () => {
    localStorage.removeItem("Token");
    localStorage.removeItem("FirstLogin");
    SetToken(null)
    window.location.href = '/'
  };

  return (
    <AuthContext.Provider value={{ login, logout, Token, Role, Name, idUser, SetIdUser, SetName }}>
      {children}
    </AuthContext.Provider>
  );
};
