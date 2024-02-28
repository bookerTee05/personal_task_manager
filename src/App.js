import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="container">
      <h1 className="app-title">Task Manager</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
