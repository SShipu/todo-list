import React, { useState } from 'react';
import './App.css';
import Column from './components/Column';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (title, description, status) => {
    const newTodo = {
      id: Date.now(),
      title,
      description,
      status,
      order: todos.filter(todo => todo.status === status).length + 1,
      dueTime: null,
      completedAt: null,
    };

    if (status === 'New') {
      setTodos([newTodo, ...todos]);
    } else {
      setTodos([...todos, newTodo]);
    }
  };

  const moveTodo = (id, newStatus) => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          status: newStatus,
          order: todos.filter(t => t.status === newStatus).length + 1,
          completedAt: newStatus === 'Done' ? new Date() : todo.completedAt,
        };
      } else {
        return todo;
      }
    });

    setTodos(newTodos);
  };

  return (
    <div className="app">
      <h1>Todo List Application</h1>
      <div className="columns">
        <Column title="New" todos={todos.filter(todo => todo.status === 'New')} addTodo={addTodo} moveTodo={moveTodo} />
        <Column title="Ongoing" todos={todos.filter(todo => todo.status === 'Ongoing')} addTodo={addTodo} moveTodo={moveTodo} />
        <Column title="Done" todos={todos.filter(todo => todo.status === 'Done')} addTodo={addTodo} moveTodo={moveTodo} />
      </div>
    </div>
  );
}

export default App;
