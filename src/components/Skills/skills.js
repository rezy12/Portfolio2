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
                        <p> A passionate and detail-oriented UI/UX designer dedicated to creating immersive digital experiences from wireframes to the final pixel, my goal is to elevate user journeys and bring ideas to life through thoughtful design solutions.</p>
                    </div>
                </div>

                <div className="skillBar">
                    <img src= {WebDesign} alt="WebDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Web Design</h2>
                        <p>I creative web designer who loves turning ideas into visually stunning and user-friendly websites, a knack of blending functionality, I bring a unique touch to every project crafting digital spaces that not only look great but also provide an intuitive and engaging experience.</p>
                    </div>
                </div>

                <div className="skillBar">
                    <img src= {AppDesign} alt="AppDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>App Design</h2>
                        <p>app designer driven by a passion creating seamless and impactful mobile experiences, a keen eye detail and a user-centric approach,  thrive on the challenge of making every tap and swipe a delight</p>
                    </div>
                </div>
            </div>

        </section>
    );
        
    
}

export default Skills;