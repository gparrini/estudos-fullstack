import React from "react";
import "./global.css";
import { AppRoutes } from "./routes/AppRoutes";
import { Navegation } from "./components/Navegation";


export function App() {
  return (
    <>
      <Navegation/>
      <AppRoutes />
    </>
  );
}
