import React from "react";
import {useRef} from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight,faCartShopping  } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";

export default function Body(props){

    const dispatch = useDispatch()

    const carousel = useRef(null);

    const handleLeftClick = (e)=>{
        e.preventDefault()
        carousel.current.scrollLeft-=carousel.current.offsetWidth
      }
    const handleRightClick = (e)=>{
    e.preventDefault()
    carousel.current.scrollLeft+=carousel.current.offsetWidth
    }

    return(
        <>
        <div className="container" ref={carousel}>
            {props.figures.map(figure=>
                <div className="cardItem" key={figure.id}>
                    <img src={`assets/${figure.icon}.jpg`} 
                        alt={figure.icon}>
                    </img>
                    <div className="cardItem-desc">
                        <h1>{`Action Figure ${figure.icon}`}</h1>
                        <button onClick={()=>{dispatch({type:"ADD",payload:figure})}}>
                            <FontAwesomeIcon icon={faCartShopping} className="figureCart"/>
                        </button>
                        
                    </div>
                </div>
            )}    
        </div>
        <div className="buttons">
            <button className="buttonAnimation" onClick={handleLeftClick}><FontAwesomeIcon icon={faChevronLeft} /></button>
            <button className="buttonAnimation" onClick={handleRightClick}><FontAwesomeIcon icon={faChevronRight} /></button>
      </div>
      </>
    );

}

