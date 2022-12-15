import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";

function Nav(){
    return(
    <nav className="navbar">
        <h2>Anime Action</h2>
        <div className="nav-options">
            <FontAwesomeIcon icon={faCartShopping} className='cart'/>
            <FontAwesomeIcon icon={faUser} className='user'/>
        </div>
    </nav>
    );
};

export default Nav;