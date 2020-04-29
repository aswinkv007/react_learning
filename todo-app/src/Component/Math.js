import React, { Component } from 'react'


export default class math extends Component {
  state = {
    fistname : "",
    lastname : ""

  }

  change = (event)=>{
      this.setState({
          [event.target.name] : event.target.value
          
      })
  }

  onsubmit=()=>{
      console.log(this.state.fistname)
  }



    render() {
        return (
            <div>
                <form>
                    <input type="text"
                     name="fistname"
                     value={this.state.fistname}
                     onChange={this.change}/>

                    <input type="text"
                     name="lastname"
                     value={this.state.lastname}
                     onChange={this.change}/>
                        <h1>{this.props.add}</h1>
                    <button type="button" onClick={this.onsubmit}>submit</button>

        <h3>{this.state.fistname}{" "}{this.state.lastname}</h3>
                </form>
                
               
            </div>
        )
    }
}
