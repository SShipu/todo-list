import React, { useState } from 'react';

function AddTodo({ addTodo, columnTitle }) {
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');

  const handleAddTodo = () => {
    addTodo(newTitle, newDescription, columnTitle);
    setNewTitle('');
    setNewDescription('');
  };

  return (
    <div className="add-todo">
      <input
        type="text"
        placeholder="Title"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={newDescription}
        onChange={(e) => setNewDescription(e.target.value)}
        required
      />
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
}

export default AddTodo;
