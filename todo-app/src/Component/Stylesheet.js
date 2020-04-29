import React from 'react'
import "./Style.css"

export default function Stylesheet(props) {
    let options = props.option? "demo":"xl-font" 
    return (
        <div>
            <h3 className={`${options}`}>We believe that our customers should be free to enjoy the Internet without worrying about bandwidth restrictions. we don’t slow you down at peak times.</h3>
            
        </div>
    )
}
