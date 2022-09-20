import React from "react";
import "./Bio.css"
import bioIcon from '../../img/bioIcon.png'

function Bio(props){
    return(
        <div className="contentBio_inner">
            <div className="bioIcon">
                <img src={bioIcon}></img>
            </div>
            <div className="bioTextContainer">
                <div className="bioText">
                    <a>{props.bioName}</a>
                </div>
            </div>
        </div>
    )
}

export default Bio;