import React from "react";
import '../Page.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function validate(){
    const email = document.getElementById("email").value;
    const regx = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i

    if(regx.test(email)){
        alert("Um email para trocar de senha foi enviado para o email inserido.")
        return true
    }else{
        alert("Email inválido")
        return false
    }

};

export default function Recover(){
    const navigate = useNavigate();
    return(
        <div className="login-body">
            <div className="login">
            <div className="flexrow">
                <button id="arrow" onClick={()=>navigate('/login')}><FontAwesomeIcon icon={faChevronLeft} /></button>
                <h1>Recupere sua senha</h1>
            </div>
            
            <p>Insira seu email para recuperar sua senha.</p>
            <input className="largura" id="email" name="RECOVER" type="text" placeholder="Email para recuperar"/>
            <button onClick={()=>validate()} type="button" className="button">Solicitar</button>
            </div>
    </div>
    );
}

