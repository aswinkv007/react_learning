import React, { Component } from 'react'
import Child from './Child'

export default class parent extends Component {
   
    
        state = {
             parentName : "parent"
        }
        //this.greet = this.greet.bind(this)
    

    greet = (chiledname)=>{
        alert(`hello${this.state.parentName} from ${chiledname}`)
    }
    
    

    render() {
        return (
            <div>
            <Child greet = {this.greet}/>
            </div>
        )
    }
}
