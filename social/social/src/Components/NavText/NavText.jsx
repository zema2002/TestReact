import React from "react";
import "./NavText.css"


function NavText(props) {
    return(
        <div className="navText">
            {props.item}
        </div>
    )
}

export default NavText;