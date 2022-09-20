import React from "react";
import "./ContentName.css"

function ContentName(props){
    return(
        <div className="contentName_inner">
            <a>{props.name}</a>
        </div>
    )
}

export default ContentName;