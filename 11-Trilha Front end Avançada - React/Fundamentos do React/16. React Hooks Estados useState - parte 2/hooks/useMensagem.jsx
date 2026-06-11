import React, { useState } from "react";

export function useMensagem() {
  const [user, setUser] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const handleMensagem = (event) =>{
    if(event.key === "Enter") {
      setUser(event.target.value);
      setShowMessage(true);
    }
  }

  return {user, showMessage, handleMensagem};
}

// nÃO PODEMO RETORNAR JSX - Retornar um dado - objeto, função, array