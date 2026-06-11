import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

export function Header() {
  // Acessa o valor do contexto utilizando useContext
  const contextValue = useContext(UserContext);
  console.log(contextValue);

  return <header>Olá, {contextValue.user}!</header>;
}
