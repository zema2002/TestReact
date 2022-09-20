import React from "react";
import "./ContentImage.css"
import avatar from '../../img/me.jpg'

function ContentImage(){
    return(
        <div className="contentImage_inner">
            <img src={avatar}></img>
        </div>
    )
}

export default ContentImage;