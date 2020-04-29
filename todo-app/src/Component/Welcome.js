import React, { Component } from 'react'

export default class Welcome extends Component {
    state = {
        number : 0
    }

    add = ()=>{
        this.setState({
           number :  this.state.number+1
        })

    }
   

    render() {
        return (
            <div>
                <h1>{this.state.number}</h1>
                <button onClick={this.add}>ADD</button>
            </div>
        )
    }
}

