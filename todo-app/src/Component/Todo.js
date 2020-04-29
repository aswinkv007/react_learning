import React, { Component } from 'react'


export default class Todo extends Component {
  state = {
    result : "value"

  }

  chanevalue = event=>{
  
    
    this.setState({
      result: event.target.value,
    })

  }

  render() {
    return (
      <div>
        <h1>my todo application </h1>
    <h2>{this.props.value}</h2>
    <form>
      <h2>TEXT VALUE</h2>
      <input type="text" onChange={this.chanevalue}/>
      <h2>{this.state.result}</h2>

    </form>
      </div>
    )
  }
}
