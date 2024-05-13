// import React, { useState } from 'react';
// import Input from './Components/Input';
// import Card from './Components/card';

// const App = () => {
//   const [todos, setTodos] = useState([]);
//   const [filter, setFilter] = useState('all');

//   const addTodo = (newTitle, newDesc) => {
//     const newTodo = {
//       id: todos.length + 1,
//       title: newTitle,
//       description: newDesc,
//       completed: false
//     };
//     setTodos([...todos, newTodo]);
//     console.log("Todo added:", newTodo);
//   };

//   const deleteTodo = (id) => {
//     setTodos(todos.filter((todo) => todo.id !== id));
//   };

//   const toggleComplete = (id) => {
//     setTodos(
//       todos.map((todo) =>
//         todo.id === id ? { ...todo, completed: !todo.completed } : todo
//       )
//     );
//   };

//   const editTodo = (id, newTitle, newDescription, completed) => {
//     setTodos(
//       todos.map((todo) =>
//         todo.id === id
//           ? { ...todo, title: newTitle, description: newDescription, completed: completed }
//           : todo
//       )
//     );
//   };

//   return (
//     <div> 
//       <h1>My Todo</h1>
//       <Input addTodo={addTodo} />
//       <div>
//         <select value={filter} onChange={(e) => setFilter(e.target.value)}>
//           <option value="all">All</option>
//           <option value="completed">Completed</option>
//           <option value="notCompleted">Not Completed</option>
//         </select>
//       </div>
//       {todos.filter((todo) => {
//         if (filter === 'completed') {
//           return todo.completed;
//         } else if (filter === 'notCompleted') {
//           return !todo.completed;
//         }
//         return true; // 'all' filter
//       }).map((todo, index) => (
//         <Card
//           key={todo.id}
//           todo={todo}
//           index={index}
//           deleteTodo={deleteTodo}
//           toggleComplete={toggleComplete}
//           editTodo={editTodo}
//         />
//       ))}
//     </div>
//   );
// };

// export default App;

import React, { useState } from 'react';
import Input from './Components/Input';
import Card from './Components/card';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTodo = (newTitle, newDesc) => {
    const newTodo = {
      id: todos.length + 1,
      title: newTitle,
      description: newDesc,
      completed: false
    };
    setTodos([...todos, newTodo]);
    console.log("Todo added:", newTodo);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id, newTitle, newDescription, completed) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, title: newTitle, description: newDescription, completed: completed }
          : todo
      )
    );
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'completed') {
      return todo.completed;
    } else if (filter === 'notCompleted') {
      return !todo.completed;
    }
    return true; // 'all' filter
  });

  return (
    <div> 
      <h1 className='text-center'>My Todo</h1>
      <Input addTodo={addTodo} />
      
       <span><h4>Todos</h4></span> 
        <span><select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="notCompleted">Not Completed</option>
        </select></span>
      
      {filteredTodos.map((todo, index) => (
        <Card
          key={todo.id}
          todo={todo}
          index={index}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
          editTodo={editTodo}
        />
      ))}
    </div>
  );
};

export default App;
