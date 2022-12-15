import React from "react";
import Body from "./components/Body";
import Nav from "./components/Nav"

function Home(props){

    return (
            <div className="page">
                <Nav/>
                <div id="figureSection">
                    {props.figures.forEach((figure, index) =>
                    <Body key={index} figure={figure}></Body>
                    )} 
                </div>
    
            </div>
            
    )

}

export default Home;