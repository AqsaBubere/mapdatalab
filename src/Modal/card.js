import React from "react";

function Card(props){
    return(
        <div className="card">
            <h6 className="card-title">{props.title}</h6>
            <p className="card-description">{props.description}</p>
        </div>
    )
}

export default Card;