import React from "react";
import NavText from "../NavText/NavText";
import "./Nav.css"
import { NavLink } from "react-router-dom";

function Nav() {
    return(
        <nav className="nav">
        <NavLink to="/aboutInfo"><NavText item="Main"/></NavLink>
        <NavLink to="/dialogs"><NavText item="Dialog"/></NavLink>
        <NavText item="Item3"/>
        </nav>
    )
}

export default Nav;