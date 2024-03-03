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
        <a
          href="https://rezy12.github.io/Blisfullbites/"
          className={`worksImgContainer ${hoveredIndex === 0 ? 'hovered' : ''}`}
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={handleMouseLeave}
        >
          <img src={Portfolio1} alt="Portfolio 1" className="worksImg" />
          {hoveredIndex === 0 && (
            <div className="imgOverlay">
              <p>Explore our website to discover the finest ice cream in town, featuring a delectable selection of sundaes and a variety of irresistible ice cream toppings.</p>
            </div>
          )}
        </a>

        <a
          href="https://rezy12.github.io/Spicy-Cupz/"
          className={`worksImgContainer ${hoveredIndex === 1 ? 'hovered' : ''}`}
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
        >
          <img src={Portfolio2} alt="Portfolio 2" className="worksImg" />
          {hoveredIndex === 1 && (
            <div className="imgOverlay">
              <p>Indulge in our website showcasing sweet candies with a burst of sour goodness in every delightful bite.</p>
            </div>
          )}
        </a>

        <a
          href="https://www.ummahtojannahinc.org/"
          className={`worksImgContainer ${hoveredIndex === 1 ? 'hovered' : ''}`}
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
        >
          <img src={Portfolio3} alt="Portfolio 3" className="worksImg" />
          {hoveredIndex === 1 && (
            <div className="imgOverlay">
              <p>Explore our fundraising website where I crafted the layout and design, customizing it for optimal presentation and impact.</p>
            </div>
          )}
        </a>

        <a
          href="https://rezy12.github.io/muslim_for_charity/"
          className={`worksImgContainer ${hoveredIndex === 1 ? 'hovered' : ''}`}
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
        >
          <img src={Portfolio4} alt="Portfolio 4" className="worksImg" />
          {hoveredIndex === 1 && (
            <div className="imgOverlay">
              <p>Discover our website for Muslim charity, empowering users to seamlessly send money and make donations for meaningful causes.</p>
            </div>
          )}
        </a>

        <a
          href="https://rezy12.github.io/PizzaSlice/"
          className={`worksImgContainer ${hoveredIndex === 1 ? 'hovered' : ''}`}
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
        >
          <img src={Portfolio5} alt="Portfolio 5" className="worksImg" />
          {hoveredIndex === 1 && (
            <div className="imgOverlay">
              <p>Indulge in our pizza slice haven, where we offer a delightful array of famous flavors at unbeatable prices. Explore the taste that suits your cravings!</p>
            </div>
          )}
        </a>

        <a
          href="https://rezy12.github.io/Krust-Kraft/"
          className={`worksImgContainer ${hoveredIndex === 1 ? 'hovered' : ''}`}
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
        >
          <img src={Portfolio6} alt="Portfolio 6" className="worksImg" />
          {hoveredIndex === 1 && (
            <div className="imgOverlay">
              <p>Embark on a global pizza journey with our exquisite selection, featuring the best flavors from around the world.</p>
            </div>
          )}
        </a>

        






        {/* Repeat the above structure for each project */}

      </div>

      <button className="workBtn">See More</button>
    </section>
  );
};

export default Works;