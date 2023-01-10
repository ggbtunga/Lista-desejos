import React from "react";
import '../Page.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function validate(){
    const email = document.getElementById("email").value;
    const regx = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i

    if(regx.test(email)){
        alert("Email válido")
        return true
    }else{
        alert("Email inválido")
        return false
    }

};

export default function Register(){

    const navigate = useNavigate();

    return(
        <div className="login-body">
            <div className="login">
                <div className="flexrow">
                    <button id="arrow" onClick={()=>navigate('/login')}><FontAwesomeIcon icon={faChevronLeft} /></button>
                    <h1>Criar nova conta</h1>
                </div>
                
                <input className="largura" id="user" name="USER" type="text" placeholder="Nome do Usuário"/>
                <input className="largura" id="email" name="RECOVER" type="text" placeholder="Email para registrar"/>
                <input className="largura" id="password" name="PASSWORD" type="password" placeholder="Senha"/>
                <input className="largura" id="repassword" type="password" placeholder="Digite a senha novamente"/>
                <button onClick={()=>validate()} type="button" className="button">Registrar</button>
            </div>
        </div>
    );
}
