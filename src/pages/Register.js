import React from "react";
import "./LoginStyles.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function Register(){

    const navigate = useNavigate();

    return(
        <div className="container">
            <div className="flexrow">
                <button type="button" onClick={()=>navigate('/login')}><FontAwesomeIcon icon={faChevronLeft} /></button>
                <h1>Criar nova conta</h1>
            </div>
            
            <input className="largura" id="user" name="USER" type="text" placeholder="Nome do Usuário"/>
            <input className="largura" id="recover" name="RECOVER" type="text" placeholder="Email para registrar"/>
            <input className="largura" id="password" name="PASSWORD" type="password" placeholder="Senha"/>
            <input className="largura" id="password" type="password" placeholder="Digite a senha novamente"/>
            <button type="button" class="button">Registrar</button>
        </div>
    );
}
