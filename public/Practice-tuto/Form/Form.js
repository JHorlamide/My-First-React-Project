import React, { Component } from "react";

class Form extends Component {
  state = {
    name: null,
    age: null,
    skill: null,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.developer(this.state);
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" onChange={this.handleChange} />

          <label htmlFor="name">Age: </label>
          <input type="text" id="age" onChange={this.handleChange} />

          <label htmlFor="name">Skill: </label>
          <input type="text" id="skill" onChange={this.handleChange} />

          <button>Submit</button>
        </form>
      </div>
    );
  }
};

export default Form;