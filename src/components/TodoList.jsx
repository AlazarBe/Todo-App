import "./TodoList.css";
function TodoList({ todos, onToggleTodo, onDeleteTodo }) {
  return (
    <div className="todo-list">
      {todos.length === 0 ? (
        <p>No task to display. Please add a new task.</p>
      ) : (
        todos.map((todo) => (
          <label key={todo.id} className="check-list">
            <input
              className="check-input"
              type="checkbox"
              checked={todo.completed}
              onChange={() => onToggleTodo(todo.id)}
            />
            <span>{todo.text}</span>

            <button
              className="delete-btn"
              onClick={() => onDeleteTodo(todo.id)}
            >
              🗑️
            </button>
          </label>
        ))
      )}
    </div>
  );
}

export default TodoList;
