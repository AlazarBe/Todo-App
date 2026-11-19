import { useState } from "react";
import InputForm from "./InputForm";
import TodoList from "./TodoList";
import "./Home.css";
function Home() {
  const [todos, setTodos] = useState([]);

  function handleAddTodo(text) {
    setTodos((currentTodos) => [
      ...currentTodos,
      {
        id: Date.now(),
        text: text,
        completed: false,
      },
    ]);
    console.log("New todo added:", text);
  }

  function handleToggleTodo(id) {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  }
  function handeleDeleteTodo(id) {
    {
      setTodos(todos.filter((todo) => todo.id !== id));
    }
  }

  return (
    <div className="home">
      <h1>Todo Home Page</h1>
      <h2>Here is some content </h2>
      <InputForm onAddTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        onToggleTodo={handleToggleTodo}
        onDeleteTodo={handeleDeleteTodo}
      />
    </div>
  );
}
export default Home;
