import React from 'react';

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        {/* <h2 className="about-heading">ABOUT ME.</h2> */}
        
        <div className="about-img">
          <div className="about-layered">
            <span className="about-text-behind">ABOUT</span>
            <div className="fence-container">
              <img src="grayscaled.png" alt="Pratyush" />
              <span className="about-text-front">ME</span>
              <div className="fence-overlay"></div>
            </div>
          </div>
        </div>

        <div className="about-content">
          <p>Computer Science Engineering student exploring machine learning and web development to build meaningful, real-world solutions.</p>
          <a href="#projects" className="btn">My Projects</a>
        </div>
      </div>
    </section>
  );
}

export default About;
