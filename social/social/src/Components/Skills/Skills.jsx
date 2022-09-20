import React from "react";
import "./Skills.css"
import hardIcon from "../../img/hardSkills.png"
import softIcon from "../../img/softSkills.png"

function Skills(props) {
    return(
        <div className="contentSkills_inner">
        <div className="hardSkillsIcon">
            <img src={hardIcon}></img>
            <a>Hard</a>
        </div>
        <div className="hardSkillsTextContainer">
            <div className="hardSkillsText">
                <a>{props.hardDesc}</a>
            </div>
        </div>

        <div className="softSkillsIcon">
            <img src={softIcon}></img>
            <a>Soft</a>
        </div>
        <div className="softSkillsTextContainer">
            <div className="softSkillsText">
                <a>{props.hardDesc}</a>
            </div>
        </div>
    </div>
    )
}

export default Skills;