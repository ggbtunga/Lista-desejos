import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function Body(props){

    return(
        <div className="container">
            {props.figures.map(figure=>
                <div className="cardItem">
                    <img src={`assets/${figure.icon}.jpg`} 
                        alt={figure.icon}
                        key={figure.id}>
                    </img>
                    <div className="cardItem-desc">
                        <h1>{`Action Figure ${figure.icon}`}</h1>
                        <FontAwesomeIcon icon={faCartShopping} className="figureCart"/>
                    </div>
                </div>
            )}    
        </div>
    
    );

}

