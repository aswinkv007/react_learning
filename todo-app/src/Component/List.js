import React, { Component } from 'react'

export default class List extends Component {
    state = {
        data : [{
            name:"Aswin",
            id:121,
            designation:"prodection"
        },
        {
            name:"Manoj",
            id:134,
            designation:"accountent"
        }]
        
    };
    render() {
        const  {fistName,secondName} = this.props;
        return (
            <div>
                <h1>{fistName}{secondName}</h1>
                
                    {this.state.data.map((value,index)=>{

                    return <li key={index}>
                        {value.name}{"-"}{value.id}{"-"}{value.designation}</li>
                    })}         
               
            </div>
        )
    }
}


