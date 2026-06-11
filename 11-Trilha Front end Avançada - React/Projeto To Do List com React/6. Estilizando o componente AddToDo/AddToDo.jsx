import React, { useState } from "react";
import "./AddTodo.css";

export function AddTodo({ onAddTodo }) {
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
    if (errorMessage) setErrorMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") {
      setErrorMessage("Digite uma tarefa antes de adicionar");
    } else {
      // Adicionar tarefa
      onAddTodo(inputValue.trim());
      setInputValue("");
      setErrorMessage("");
    }
  };

  return (
    <form className="add-todo-form" onSubmit={handleSubmit}>
      <div className="input-container">
        <input
          type="text"
          placeholder="Digite uma nova tarefa..."
          className="todo-input"
          onChange={handleChange}
          value={inputValue}
        />

        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
      <button type="submit" className="add-button">
        Adicionar
      </button>
    </form>
  );
}
