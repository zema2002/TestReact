import React from "react";
import "./Content.css"
import ContentImage from "../ContentImage/ContentImage";
import ContentName from "../ContentName/ContentName";
import Bio from "../Bio/Bio";
import Skills from "../Skills/Skills";
import { Route,Routes } from "react-router-dom";
import AboutInfo from "./AboutInfo/AboutInfo";
import Dialogs from "../Dialogs/Dialogs";



function Content(){
    return(
        
       
        <div className="content">
            <Routes>
                <Route path="/aboutInfo" element={<AboutInfo/>}/>
                <Route path="/dialogs" element={<Dialogs/>}/>
            </Routes>
         </div>
            
          
          
            
        
    )
}

export default Content;