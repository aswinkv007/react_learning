import React, { Component } from 'react'

export default class Form extends Component {
    state = {
        username : "",
        password : "",
        skill : "React"
    }

    change = (event)=>{
       this.setState({
        username : event.target.value
          
       })
    }
    password = (event)=>{
        this.setState({
            password : event.target.value
           
        })
     }
     skills = (event)=>{
        this.setState({
            skill : event.target.value
           
        })
     }
     btnclicked = (event)=>{
         console.log(this.state.username,this.state.password,this.state.skill)
         event.preventDefault()
        //  alert(this.state.username,this.state.password,this.state.skill)
     }

    render() {
        return (
            <form onSubmit={this.btnclicked}>
                <div>
                <label>Username</label>
                <input type="text" value={this.state.username} onChange={this.change}/>
        <h2>{this.state.username}</h2>
                </div>
                <div>
                <label>Password</label>
                <input type="password" value={this.state.password} onChange={this.password}/>
        <h2>{this.state.password}</h2>
                </div>
                <div>
                <label>Skills</label>
              <select value = {this.state.skill} onChange={this.skills}>
                  <option>React</option>
                  <option>Angular</option>
                  <option>Vui</option>
                  </select>
                </div>
                <button type="submit">submit</button>
            </form>
            
        )
    }
}
