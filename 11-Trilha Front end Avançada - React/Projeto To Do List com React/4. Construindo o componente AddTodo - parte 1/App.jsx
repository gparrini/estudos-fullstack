import "./index.css";
import "./App.css";
import { AddTodo } from "./components/AddTodo";

function App() {
  return (
    <div className="container">
      <h1 className="app-title">Lista de Tarefas</h1>
      {/* Componente - Input Botão */}
      <AddTodo/>
      {/* Componente - Lista de componentes */}
    </div>
  );
}

export default App;
