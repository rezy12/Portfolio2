import React, { useState } from 'react';
import './works.css';
import Portfolio1 from '../../assets/portfolio-1.png';
import Portfolio2 from '../../assets/portfolio-2.png';
import Portfolio3 from '../../assets/portfolio-3.png';
import Portfolio4 from '../../assets/portfolio-4.png';
import Portfolio5 from '../../assets/portfolio-5.png';
import Portfolio6 from '../../assets/portfolio-6.png';

const Works = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <section id="works">
      <h2 className="worksTitle">My Portfolio</h2>
      <span className="worksDesc"></span>

      <div className="worksImgs">
        {[
          { src: Portfolio1, link: 'https://rezy12.github.io/Blisfullbites/' },
          { src: Portfolio2, link: 'https://rezy12.github.io/Spicy-Cupz/' },
          { src: Portfolio3, link: 'https://www.ummahtojannahinc.org/' },
          { src: Portfolio4, link: 'https://rezy12.github.io/muslim_for_charity/' },
          { src: Portfolio5, link: 'https://rezy12.github.io/PizzaSlice/' },
          { src: Portfolio6, link: 'https://rezy12.github.io/Krust-Kraft/' },
        ].map((project, index) => (
          <a
            key={index}
            href={project.link}
            className={`worksImgContainer ${hoveredIndex === index ? 'hovered' : ''}`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <img src={project.src} alt={`Portfolio ${index + 1}`} className="worksImg" />
            {hoveredIndex === index && (
              <div className="imgOverlay">
                <p>Description of Project {index + 1}</p>
              </div>
            )}
          </a>
        ))}
      </div>

      <button className="workBtn">See More</button>
    </section>
  );
};

export default Works;
