import "./index.css";
import "./App.css";
import { AddTodo } from "./components/AddTodo";
import { useState } from "react";
import { TodoList } from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Exemplo de tarefa", completed: false },
    { id: 2, text: "Aprender React", completed: false },
  ]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="container">
      <h1 className="app-title">Lista de Tarefas</h1>
      {/* Componente - Input Botão */}
      <AddTodo onAddTodo={addTodo} />
      
      {/* Componente - Lista de componentes */}
      <TodoList todos={todos}/>
    </div>
  );
}

export default App;
