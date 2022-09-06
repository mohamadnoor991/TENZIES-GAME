import React from "react"
export default function(props){
    // [props.held]?
    const styleDie={
      backgroundColor: props.held ?"#59E391" :"" 
    }
    return(
        <div className="die-face" style={styleDie} onClick={props.holdfun}>
        <h1 className="die-num" >{props.value}</h1>
        
        </div>
    )
}