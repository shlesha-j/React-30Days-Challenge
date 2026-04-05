import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInput("");
  };

  
  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };


  const toggleComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id
        ? { ...todo, completed: !todo.completed }
        : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Todo App</h2>

     
      <input
        type="text"
        value={input}
        placeholder="Enter task..."
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>

     
      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map((todo) => (
          <li key={todo.id} style={{ margin: "10px 0" }}>
            <span
              onClick={() => toggleComplete(todo.id)}
              style={{
                cursor: "pointer",
                textDecoration: todo.completed
                  ? "line-through"
                  : "none",
              }}
            >
              {todo.text}
            </span>

            <button
              onClick={() => deleteTodo(todo.id)}
              style={{ marginLeft: "10px" }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;