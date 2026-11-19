import { useState } from "react";
import "./InputForm.css";
function InputForm({ onAddTodo }) {
  const [todo, setTodo] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    const trimmedTodo = todo.trim();
    if (!trimmedTodo) return;
    onAddTodo(trimmedTodo);
    setTodo("");
  }
  return (
    <form className="input-form" onSubmit={handleSubmit}>
      <input
        className="input-field"
        type="text"
        placeholder="Enter a new task"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className="btn" type="submit">
        Add Task
      </button>
    </form>
  );
}
export default InputForm;
