import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = async () => {
    if (!newTodo.trim()) return;
    const newTodoItem = {
      _id: Date.now().toString(),
      title: newTodo,
      completed: false,
    };
    setTodos([...todos, newTodoItem]);
    setNewTodo('');
  };

  const toggleTodoCompletion = async (id, completed) => {
    setTodos(todos.map(todo => 
      todo._id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = async (id) => {
    setTodos(todos.filter(todo => todo._id !== id));
  };

  return (
    <div className="todo-app">
      <header className="header">
        <h1>My Daily Todo List</h1>
      </header>
      <div className="todo-container">
        <ul className="todo-list">
          {todos.map((todo) => (
            <li key={todo._id} className="todo-item">
              <span
                onClick={() => toggleTodoCompletion(todo._id, todo.completed)}
                className={todo.completed ? 'todo-text completed' : 'todo-text'}
              >
                {todo.title}
              </span>
              <button onClick={() => deleteTodo(todo._id)} className="delete-button">
                🗑️
              </button>
            </li>
          ))}
        </ul>
        <div className="add-task">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a new task"
            className="task-input"
          />
          <button onClick={addTodo} className="add-button">
            + New task
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;