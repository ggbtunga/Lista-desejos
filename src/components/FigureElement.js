import React from "react";

function FigureElement(props){


    return(
        <div id={props.id}>
            <img className="icon"
                src={`assets/${props.icon}.jpg`}
                alt={props.icon}></img>
        </div>
    );

}

export default FigureElement;