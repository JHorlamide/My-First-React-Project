import React, { useState } from 'react';

const AddTodo = ({ addNewTodo }) => {
  const [addTodo, setAddTodo] = useState({
    content: "",
  });

  const handleChange = (e) => {
    setAddTodo({
      content: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewTodo(addTodo);
    setAddTodo({
      content: ''
    })
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className='center'>Add New Todos</label>
        <input type="text" onChange={handleChange} value={addTodo.content}/>
      </form>
    </div>
  );
};

export default AddTodo;