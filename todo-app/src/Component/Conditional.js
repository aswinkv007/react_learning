import React, { Component } from 'react'

export default class conditional extends Component {
    state = {
        status : false,
        message : "Loading...."
    }


    render() {
        this.state.status ? this.state.message = "sucsess" : this.state.message = "failed"
        

        return (
            <div>
                <h1>{this.state.message}</h1>
            </div>
        )
    }
}
