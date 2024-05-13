
import React, { useState } from "react";

const Card = ({ todo, index, deleteTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);
  const [editDescription, setEditDescription] = useState(todo.description);

  const handleEditChange = (e) => {
    if (e.target.name === "title") {
      setEditTitle(e.target.value);
    } else {
      setEditDescription(e.target.value);
    }
  };

  const handleSaveEdit = () => {
    editTodo(todo.id, editTitle, editDescription);
    setIsEditing(false);
  };

  const handleCompleteChange = (e) => {
    const completedValue = e.target.value === "true"; // Convert string to boolean
    editTodo(todo.id, editTitle, editDescription, completedValue);
  };

  return (
    <div className="card">
      {isEditing ? (
        <div>
         <span>
         <input
            type="text"
            name="title"
            value={editTitle}
            className="title"
            onChange={handleEditChange}
          />
          </span> 
          <input
            type="text"
            name="description"
            value={editDescription}
            onChange={handleEditChange}
          ></input>
          <button onClick={handleSaveEdit}>Save</button>
        </div>
      ) : (
        <div>
          <h3>Title: {todo.title}</h3>
          <p> Description :{todo.description}</p>
          <h6>Status:</h6><select value={todo.completed} onChange={handleCompleteChange}>
            <option value={false}>Mark Incomplete</option>
            <option value={true}>Mark Complete</option>
          </select>
          <br/>
          <br/>

<div>
<span> <button className="btn btn-danger" onClick={() => setIsEditing(true)}>Edit</button>
</span>
<button className="btn btn-primary"onClick={() => deleteTodo(todo.id)}>Delete</button>

</div>
  

        </div>
      )}
    </div>
  );
};

export default Card;
