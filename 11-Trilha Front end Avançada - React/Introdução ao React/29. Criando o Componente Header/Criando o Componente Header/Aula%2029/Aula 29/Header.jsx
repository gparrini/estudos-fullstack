import React from "react";
import { FaHome, FaUserFriends, FaEnvelope } from "react-icons/fa";

export function Header() {
  return (
    <header>
      <h1>Lista de Perfis</h1>
      <nav>
        <a href="#home">
          <FaHome />
          Home
        </a>
        <a href="#about">
          <FaUserFriends />
          Sobre
        </a>
        <a href="#contact">
          <FaEnvelope />
          Contato
        </a>
      </nav>
    </header>
  );
}
