import React from "react";
import '../Page.css'
import { useNavigate } from "react-router-dom";


export default function Login(){
    
    const navigate = useNavigate();

    return(
        <div className="login-body">
            <div className="login">
                <h1>Entrar em sua conta</h1>
                <input className="largura" id="user" name="USER" type="text" placeholder="Usuário"/>
                <input className="largura" id="password" name="PASSWORD" type="password" placeholder="Senha"/>

                <button type="button" className="button entrar">ENTRAR</button>

                <button onClick={()=>navigate('/register')} className="button cadastrar" >Cadastrar uma nova Conta</button>

                <button onClick={()=>navigate('/recover')} className="recuperar">Esqueceu a senha?</button>
            </div>
        </div>
    )
}