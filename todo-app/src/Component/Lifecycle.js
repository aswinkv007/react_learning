import React, { Component } from 'react'
import Child from "./Child"
import Stylesheet from "./Stylesheet"
export default class Lifecycle extends Component {

constructor (probs){
    super(probs)
    this.state = 
    {
        status : true
    }
}

change = ()=>{
this.setState({
    status : false
})
}
componentDidUpdate() {
alert("updated")
  }

    render() {
       
        let head
       head =  this.state.status ? <Child/> : <Stylesheet/>
        return (
            <div>
                <h2>{head}</h2>
                <h2>{this.state.status}</h2>
                <button onClick = {this.change}> Submit </button>
            </div>
        )
    }
}
