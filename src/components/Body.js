import React from "react";
// import FigureElement from './FigureElement'


function Body(props){

    return(
        <div className="container">
            {props.figures.map(figure=>
                <img src={`assets/${figure.icon}.jpg`} 
                    alt={figure.icon}
                    key={figure.id}>
                </img>
            )}    
        </div>
    
    );

}

export default Body;