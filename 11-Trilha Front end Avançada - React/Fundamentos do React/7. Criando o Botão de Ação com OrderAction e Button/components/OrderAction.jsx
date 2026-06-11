import React from "react";
import { Button } from "./Button";
import { FaEdit } from "react-icons/fa";

export function OrderAction({ onEdit }) {
  return (
    <Button onClick={onEdit}>
      <FaEdit />
      Editar
    </Button>
  );
  {
    /* Componente 5 - Button */
  }
}
