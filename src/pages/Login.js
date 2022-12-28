import React from "react";
import "./LoginStyles.css"
import { useNavigate } from "react-router-dom";

export default function Login(){

    const navigate = useNavigate()

    return(
        <div className="container">
            <h1>Entrar com sua conta</h1>
            <input className="largura" id="user" name="USER" type="text" placeholder="Usuário"/>
            <input className="largura" id="password" name="PASSWORD" type="password" placeholder="Senha"/>

            <button type="button" className="button entrar">ENTRAR</button>

            <button type="button" onclick={()=>navigate('/register')} className="button cadastrar" >Cadastrar uma nova Conta</button>

            <button onClick={()=>navigate('/recover')}>Esqueceu a senha?</button>
        </div>
    )
}