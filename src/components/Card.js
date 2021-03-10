import React from 'react'
import "../css-components/card.css";

export const Card = (props) => {
    return (
        <div className="card_container">
           <h1>{props.monster.name}</h1> 
        </div>
    )
}