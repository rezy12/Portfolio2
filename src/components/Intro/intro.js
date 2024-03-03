import React from 'react';
import './intro.css';
import bg from '../../assets/image.png'
import Github from '../../assets/hireme.png';
import Resume from '../../assets/resume.png';
import ResumePDF from "../../assets/resume.pdf"
import { Link } from 'react-scroll';

//stoped at  video time
const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello"> Hello</span>
            <span className="introText"> I'm <span className='introName'> Rezwan</span> <br /> Website Designer</span>
        
            <p className="introPara"> Welcome to my portfolio! Explore a showcase of my projects below. Each one tells a unique story of creativity and craftsmanship. Have a question or just want to connect? Feel free to send me an email or DM me on my social media channels. Let's build something amazing together!</p>
          
            {/* Link to resume */}
            <a href={ResumePDF} target="_blank" rel="noopener noreferrer">
              <button className='btn'><img src={Resume} alt="Resume" className='btnImg'/> Resume </button>
            </a>

            {/* Link to GitHub */}
            <a href="https://github.com/rezy12" target="_blank" rel="noopener noreferrer">
              <button className='btn'><img src={Github} alt="GitHub" className='btnImg'/> GitHub </button>
            </a>


        </div>
        <img src={bg} alt="'Profile'" className="bg" />

    </section>
  )
}

export default Intro
