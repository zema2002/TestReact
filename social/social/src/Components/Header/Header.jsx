import React from "react";
import "./Header.css"
import logo from "../../img/myLogo.png"

function Header(){
    return(
        <header className="header">
            <img src={logo}></img>
        </header>
    )
}

export default Header;