import React from "react";


export default function Body(props){

    return(
        <div className="container">
            {props.figures.map(figure=>
                <div className="cardItem">
                    <img src={`assets/${figure.icon}.jpg`} 
                        alt={figure.icon}
                        key={figure.id}>
                    </img>
                </div>
            )}    
        </div>
    
    );

}

