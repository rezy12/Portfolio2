import React from 'react';
import './intro.css';
import bg from '../../assets/image.png'
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';

//stoped at  video time
const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello"> Hello</span>
            <span className="introText"> I'm <span className='introName'> Rezwan</span> <br /> Website Designer</span>
        
            <p className="introPara"> I am designer stuff here</p>
          
            <Link><button className='btn'><img src={btnImg} alt="Hire Me" className='btnImg'/> Hire me </button></Link>
        
        </div>
        <img src={bg} alt="'Profile'" className="bg" />

    </section>
  )
}

export default Intro
