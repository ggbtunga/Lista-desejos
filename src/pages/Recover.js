import React from "react";
import "./LoginStyles.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function Recover(){
    const navigate = useNavigate();
    return(
        <div className="container">
        <div className="flexrow">
            <button type="button" onClick={()=>navigate('/login')}><FontAwesomeIcon icon={faChevronLeft} /></button>
            <h1>Recupere sua senha</h1>
        </div>
        
        <p>Insira o email que foi usado para cadastrar sua conta.</p>
        <input className="largura" id="register" name="RECOVER" type="text" placeholder="Email para recuperar"/>
        <button type="button" class="button">Solicitar</button>
    </div>
    );
}

