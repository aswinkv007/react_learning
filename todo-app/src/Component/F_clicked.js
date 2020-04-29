import React from 'react'

export function F_clicked() {

    var clicked = ()=>{
        alert(`hello`)
    }
    return (
        <div>
            <h1>hello wold</h1>
    <button onClick={clicked}>click</button>
        </div>
    )
}

 