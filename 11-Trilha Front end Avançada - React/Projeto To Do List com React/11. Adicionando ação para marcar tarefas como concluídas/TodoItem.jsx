import React from "react";

export function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div className="todo-content">
      <input
        type="checkbox"
        className="todo-checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />

      <span className="todo-text">{todo.text}</span>

      <button className="detele-button" onClick={() => onDelete(todo.id)}>
        Remover
      </button>
    </div>
  );
}
