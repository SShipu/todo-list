import React, { useState } from 'react';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';
import addIcon from '../assets/img/add.png';

function Column({ title, todos, addTodo, moveTodo }) {
  const [showAddTodo, setShowAddTodo] = useState(false);

  return (
    <div className="column">
      <div className="column-header">
        <h3>{title}</h3>
      </div>
      {todos.map((todo, index) => (
        <TodoItem key={todo.id} todo={todo} order={index + 1} moveTodo={moveTodo} />
      ))}
      {showAddTodo && <AddTodo addTodo={addTodo} columnTitle={title} />}
      <div className="add-todo-button" onClick={() => setShowAddTodo(!showAddTodo)}>
        {showAddTodo ? 'Cancel': (
          <>
            <img src={addIcon} alt="Add" /> Add Todo
          </>
        )}
      </div>
    </div>
  );
}

export default Column;
