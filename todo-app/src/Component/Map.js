import React from 'react'
import Child from './Child'

export default function Map() {
    var persons = [
        {
            name : "Aswin",
            id:112,
            skill:"Frontend"
        },
        {
            name : "Manoj",
            id:119,
            skill:"Graphic"
        },
        {
            name : "Arjun",
            id:132,
            skill:"UI"
        }
        
    ]
    

var result = persons.map((per,index) => <Child key={index} persons = {per} index = {index}/>
)
    return (
        <div>
            {result}
        </div>
    )
}
