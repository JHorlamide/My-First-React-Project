import React, { useState } from 'react';

const Todos = ({ todos, removItem }) => {
  const todoList = todos.length ? (
    todos.map((todo) => {
      return (
        <div className="collection-item" key={todo.id}>
          <span onClick={() => {removItem(todo.id)}}>{todo.content}</span>
        </div>
      );
    })
  ) : (
    <p className="center">You have no todo left, yay!</p>
  );

  return <div className="todos collection">{todoList}</div>;
};  

export default Todos;