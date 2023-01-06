import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";


export default function Nav(){

    const navigate = useNavigate();

    return(
        <nav className="navbar">
            <h2>Anime Action</h2>
            <div className="nav-options">
                <button onClick={()=>navigate('*')}><FontAwesomeIcon icon={faCartShopping} id="cart"/></button>
                <button onClick={()=>navigate('/login')}><FontAwesomeIcon icon={faUser} id="account"/></button>
            </div>
        </nav>
    );
};
