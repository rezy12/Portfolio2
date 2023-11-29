import React from "react";
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

/*time vid 1:09:10 skills section*/
const Skills = () => {
    return (

        <section id="skills">
            <span className="skillTitle"> What I Do</span>
            <span className="skillDesc"> I am a skill designer and more stuff here</span>
            <div className="skillBars">
                
                <div className="skillBar">
                    <img src= {UIDesign} alt="UIDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>UI/UX Design</h2>
                        <p>This is Demo Text ADD STUFF HERE</p>
                    </div>
                </div>

                <div className="skillBar">
                    <img src= {WebDesign} alt="WebDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Web Design</h2>
                        <p>Add design pattern everything HERE</p>
                    </div>
                </div>

                <div className="skillBar">
                    <img src= {AppDesign} alt="AppDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>App Design</h2>
                        <p>Add examples of Apps here in the design page</p>
                    </div>
                </div>
            </div>

        </section>
    );
        
    
}

export default Skills;