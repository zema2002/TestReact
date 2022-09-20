import React from "react";
import NavText from "../NavText/NavText";
import "./Nav.css"

function Nav() {
    return(
        <nav className="nav">
            <NavText name="Item1"/>
            <NavText name="Item2"/>
            <NavText name="Item3"/>
        </nav>
    )
}

export default Nav;