import React from 'react';

function About() {
  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src="image.jpg" alt="Pratyush" />
      </div>

      <div className="about-content">
        <h2>About <span>Me</span></h2>
        <p>I'm a pre-final year Computer Science and Engineering student currently exploring opportunities and building skills in areas like web development, network analysis using Wireshark, and machine learning. I'm focused on improving my understanding through hands-on projects and continuous learning.</p>
        <a href="#projects" className="btn">My Projects</a>
      </div>
    </section>
  );
}

export default About;
