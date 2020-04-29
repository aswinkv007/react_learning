import React, { Component } from "react";
import "./Todo.css";

export default class Todoapp extends Component {
  state = {
    name: "",
    items: [],
  };

  handlechange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  storeitems = (event) => {
    event.preventDefault();
    const { name } = this.state;

    this.setState({
      items: [...this.state.items, name],
      name: "",
    });
  };

  deleteitems = (key) => {
 
    const allitems = this.state.items;
    allitems.splice(key, 1);
    this.setState({
      items: allitems,
    });
  };

  render() {
    const { name, items } = this.state;
    return (
      <div className="continer">
        <form onSubmit={this.storeitems}>
          <div className="box">
            <input
              type="text"
              value={name}
              onChange={this.handlechange}
            >
            </input>

            <div className="heading">
              <h2>TODO LIST</h2>
            </div>
          </div>
        </form>

        <ul>
          {items.map((data, index) => (
            <li className="list" key={index}>{data} <i className="fas fa-trash-alt" onClick={() => this.deleteitems(index)}></i>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
