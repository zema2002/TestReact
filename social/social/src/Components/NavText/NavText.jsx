import React from "react";
import "./NavText.css"

function NavText(props) {
    return(
        <div className="navText">
            <a className="navText_inner_a">{props.name}</a>
        </div>
    )
}

export default NavText;