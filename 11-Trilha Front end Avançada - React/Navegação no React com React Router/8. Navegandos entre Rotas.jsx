import React from "react";
import "./global.css";
import { AppRoutes } from "./routes/AppRoutes";
import {Link} from "react-router";

export function App() {
  return (
    <>
    <nav>
      {/* <a href="/">Home</a> */}
      <Link to="/">Home</Link>
      <Link to="/about">Sobre</Link>
      <Link to="/contact">Contato</Link>
    </nav>
      <AppRoutes />
    </>
  );
}
