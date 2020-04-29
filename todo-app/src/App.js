import React, { Component } from "react";

// import "./App.css";
// import Todo from "./Component/Todo";
// import Math from "./Component/Math";
// import List from "./Component/List";
// import {Greek} from "./Component/Constt"
// import Welcome from "./Component/Welcome"
// import {F_clicked} from "./Component/F_clicked";
// import Parent from "./Component/Parent";
// import Conditional from "./Component/Conditional"
// import Map from "./Component/Map"
// import Stylesheet from "./Component/Stylesheet"
// import Form from "./Component/Form"
// import Testing from "./Component/Testing",
// import Lifecycle from "./Component/Lifecycle.js"
import Todoapp from "./Component/Todoapp"


class App extends Component {
  state = {
    value: "Aswin",
    id : 111,
    adrs : ["k","o","s","h","i"]

  }

  change = ()=>{
    this.setState({
      value: "Arjun",
      id:222
    
    
    })
  }
  render() {
    return (
      <div className="App">
        {/* <h1>{this.state.value+" "+"ID is :"+this.state.id }</h1> */}
        {/* <button onClick={this.change}>change</button> */}
        {/* <Todo value = {this.state.value,this.state.id}/>  */}
        {/* <Math add = {this.state.adrs}/> */}
         {/* <List fistName="aswin" secondName="kv"/> */}
        {/* <Greek name="react" heroName="js"></Greek> */}
        {/* {<Welcome/>} */}
        {/* <F_clicked></F_clicked> */}
        {/* <Parent/> */}
        {/* <Conditional/> */}
        {/* <Map/> */}
        {/* <Stylesheet option = {true}/> */}
        {/* <Form/> */}
        {/* <Testing/> */}
        {/* <Lifecycle/> */}
        {/* <Todoapp/> */}

      
      </div>
    );
  }
}

export default App;
