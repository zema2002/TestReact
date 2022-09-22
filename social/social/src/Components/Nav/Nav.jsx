import React from "react";
import NavText from "../NavText/NavText";
import "./Nav.css"
import { NavLink } from "react-router-dom";

function Nav() {
    return(
        <nav className="nav">
        <NavLink to="/aboutInfo" className="navItem"><NavText item="About"/></NavLink>
        <NavLink to="/dialogs" className="navItem"><NavText item="Dialog"/></NavLink>
         </nav>
    )
}

export default Nav;