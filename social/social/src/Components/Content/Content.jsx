import React from "react";
import "./Content.css"
import ContentImage from "../ContentImage/ContentImage";
import ContentName from "../ContentName/ContentName";
import Bio from "../Bio/Bio";
import Skills from "../Skills/Skills";
import { Route,Routes } from "react-router-dom";
import AboutInfo from "./AboutInfo/AboutInfo";
import Dialog from "./Dialog/Dialog";
import Post from "../Test/Post/Post"


function Content(props){
    return(
        
       
        <div className="content">
            <Routes>
                <Route path="/aboutInfo" element={<AboutInfo/>}/>
                <Route path="/dialogs" element={<Dialog/>}/>
                <Route path="/testPost" element={<Post postData={props.postData} addPost={props.addPost} updatePostText={props.updatePostText}/>}/>
            </Routes>
         </div>
            
          
          
            
        
    )
}

export default Content;