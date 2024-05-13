import React, { useState } from 'react';
import './input.css';
const Input = ({ addTodo }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleAddTodo = () => {
 
      addTodo(title, description);
      setTitle('');
      setDescription('');
    
  };

  return (
    <div className="input-container text-center px-4">
      <input 
        type="text"
        placeholder="Enter todo title"
        value={title}
        onChange={handleTitleChange}
      /> 
      <input
        type='text'
        placeholder="Enter todo description"
        value={description}
        onChange={handleDescriptionChange}
      ></input>
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default Input;
