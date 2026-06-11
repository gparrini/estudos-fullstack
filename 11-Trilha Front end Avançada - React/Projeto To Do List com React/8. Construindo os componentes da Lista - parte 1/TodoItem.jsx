import React from "react";

export function TodoItem({ todo }) {
  return (
    <div className="todo-content">
      <input
        type="checkbox"
        className="todo-checkbox"
        checked={todo.completed}
        onChange={() => {}}
      />

      <span className="todo-text">{todo.text}</span>

      <button className="detele-button" onClick={() => {}}>Remover</button>
    </div>
  );
}
