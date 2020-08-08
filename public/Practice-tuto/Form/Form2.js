import React, { useState } from "react";

const Form = () => {
  const [dev, setdev] = useState({
    name: null,
    age: null,
    skill: null,
  });

  const handleChange = (e) => {
    setdev({
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(dev);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" onChange={handleChange} />

        <label htmlFor="name">Age: </label>
        <input type="text" id="age" onChange={handleChange} />

        <label htmlFor="name">Skill: </label>
        <input type="text" id="skill" onChange={handleChange} />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
