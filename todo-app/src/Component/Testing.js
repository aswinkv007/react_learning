import React, { Component } from 'react'
import Test2 from "./Test2"
import "./Style.css"

export default class Testing extends Component {
    state = {
        value : "COVID-19",
        Symptoms : "",
        Treatments: "",
        nav : ["MENU","ABOUT","CONTACT","LOGIN","SIGNUP"]
    }

   

    btnclick= (event)=>{
      this.setState({

        Symptoms : "People may be sick with the virus for 1 to 14 days before developing symptoms. The most common symptoms of coronavirus disease (COVID-19) are fever, tiredness, and dry cough. Most people (about 80%) recover from the disease without needing special treatment",
      })
        
       
    }

    newbtn= (event)=>{
        this.setState({
  
          Symptoms : "There is no specific medicine to prevent or treat coronavirus disease (COVID-19). People may need supportive care to help them breathe. If you develop a fever, cough, and have difficulty breathing, promptly seek medical care. Call in advance and tell your health provider of any recent travel or recent contact with travelers.",
        })
          
         
      }

    render() {
        return (
            <div>
                <h1> {this.state.value} </h1>
                <div className="container">
                {this.state.nav.map((value,index)=>{
                    return <ul><li className="nav">
                    <a>{value}</a>
                    </li></ul>
                })}

                 </div>
         
      
                   
                 {/* <Test2 v1 = {this.state.Symptoms} v2 = {this.state.Treatments}/> */}
        <h2>{this.state.Symptoms}{this.state.Treatments}</h2>
        <button type="submit" onClick = {this.btnclick}>Symptoms</button>
                    <button type="submit" onClick = {this.newbtn}>Treatments</button>  
            </div>
        )
    }
}
