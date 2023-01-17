import React from "react";
import { FaLinkedin,FaGithubSquare } from "react-icons/fa";

export default function Footer(){
    return(
        <>
            <footer>
                <div className="copyRight">
                    <p><span>Lista de desejos</span> &copy; 2023</p>
                </div>
                <div className="midiaIcons">
                    <a href="https://github.com/ggbtunga/Lista-desejos">
                        <FaGithubSquare/>
                    </a>
                    <a href="https://www.linkedin.com/in/hick-tan-829826168/">
                        <FaLinkedin/>
                    </a>
                    
                </div>
            </footer>
        </>
    )
}