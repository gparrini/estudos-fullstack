import React from "react";
import { Routes, Route } from "react-router";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Contact } from "../pages/Contact";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
