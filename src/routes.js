import React from "react";
import { Routes,Route } from "react-router-dom";
import Main from "./components/Main"
import Login from "./pages/Login";
import Register from "./pages/Register";
import Recover from "./pages/Recover";

export default function LoginPages(){
    return(
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/recover" element={<Recover/>}/>   
        </Routes>
    );
}