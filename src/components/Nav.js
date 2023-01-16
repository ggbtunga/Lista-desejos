import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState,useEffect} from "react";


export default function Nav(){

    const navigate = useNavigate();

    const marcadorCarrinho = useSelector((state)=>{return state});
    const [temItem,setTemItem] = useState(false);
        
    useEffect(()=>{
        if(marcadorCarrinho.length===0){
            setTemItem(false)
        }else{
            setTemItem(true)
        }
    },[marcadorCarrinho.length])
    
    return(
        <nav className="navbar">
            <h2>Anime Action</h2>
            <div className="nav-options">
                <button className="areaPonto" onClick={()=>navigate('*')}>
                    <FontAwesomeIcon icon={faCartShopping} id="cart"/>
                    <div className={temItem? "ponto":""}></div>
                </button>
                <button onClick={()=>navigate('/login')}><FontAwesomeIcon icon={faUser} id="account"/></button>
            </div>
        </nav>
    );
};
