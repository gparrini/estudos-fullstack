import "./index.css";
import "./App.css";
import { AddTodo } from "./components/AddTodo";
import { useEffect, useState } from "react";
import { TodoList } from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Exemplo de tarefa", completed: false },
    { id: 2, text: "Aprender React", completed: false },
  ]);

  useEffect(() => {
    console.log("Tarefas Atualizadas: ", todos);
  }, [todos]);

  // Carregar do localStorage quando o app abrir
  useEffect(() => {
    const tarefasSalvas = localStorage.getItem("tarefas");
    if (tarefasSalvas) {
      setTodos(JSON.parse(tarefasSalvas));
    }
  }, []);

  // Salvas no localStorage
  useEffect(() => {
    localStorage.setItem("tarefas", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="container">
      <h1 className="app-title">Lista de Tarefas</h1>
      {/* Componente - Input Botão */}
      <AddTodo onAddTodo={addTodo} />

      {/* Componente - Lista de componentes */}
      <TodoList
        todos={todos}
        onDeleteTodo={deleteTodo}
        onToggleTodo={toggleTodo}
      />
    </div>
  );
}

export default App;
