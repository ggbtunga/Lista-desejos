import React from "react";

function FigureElement(props){
    console.log(props.figure)

    return(
        <div id={props.figure.id}>
            <img className="icon"
                src={`assets/${props.figure[0].icon}.jpg`}
                alt={props.figure.icon}></img>
        </div>
    );

}

export default FigureElement;