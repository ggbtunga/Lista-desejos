import React from "react";
import FigureElement from './FigureElement'


function Body(props){
    console.log(props.figures)

    
    return(
        <div className="container">
            {props.figures.forEach((figure) =>
                // console.log(props.figures)
                <FigureElement figure={figure}></FigureElement>        
            )}
        </div>
     
    );

}

export default Body;