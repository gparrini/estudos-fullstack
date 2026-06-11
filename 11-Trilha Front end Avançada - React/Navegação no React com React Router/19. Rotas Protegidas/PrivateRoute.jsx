import React from 'react'
import { Navigate } from 'react-router';

export function PrivateRoute({children}) {
    // Simulação de Login
    const isAuthenticated = localStorage.getItem("isAdmin") === "true";
  return isAuthenticated ? children : <Navigate to="/login"/>
}

