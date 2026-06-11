import React from "react";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";

import "./global.css";

export function App() {
  return (
    <>
      <Header />
      <div className="app"></div>
      <Footer />
    </>
  );
}
