import React from 'react';

function Education() {
  return (
    <section className="education" id="education">
      <div className="education-content">
        <h2>My <span>Education</span></h2>
        <p>The academic journey that shaped my foundation...</p>
      </div>
      
      <div className="education-road-container">
        <div className="education-road">
            <svg className="road-path" viewBox="0 0 1200 400" preserveAspectRatio="none">
              <path 
                d="M0,180 C60,165 120,130 180,130 C280,130 420,320 600,255 C730,215 890,65 1020,100 C1100,120 1200,155 1200,155" 
                stroke="var(--main-color)" 
                strokeWidth="6" 
                fill="none"
                strokeDasharray="20,15"
                className="road-line"
              />
            </svg>
            
            {/* Education Markers */}
            <div className="education-marker marker-1">
              <div className="marker-pin">
                <div className="marker-icon">
                  <i className="bx bxs-graduation"></i>
                </div>
                <div className="marker-stem"></div>
              </div>
              <div className="education-card">
                <div className="education-year">2021 – 2023</div>
                <div className="education-degree">Senior Secondary Education</div>
                <div className="education-stream">Class XII</div>
                <div className="education-institution">D.A.V. Public School, Velachery</div>
              </div>
            </div>
            
            <div className="education-marker marker-2">
              <div className="marker-pin">
                <div className="marker-icon">
                  <i className="bx bxs-graduation"></i>
                </div>
                <div className="marker-stem"></div>
              </div>
              <div className="education-card">
                <div className="education-year">2023 – Present</div>
                <div className="education-degree">Bachelor of Engineering (B.E.)</div>
                <div className="education-stream">Computer Science and Engineering</div>
                <div className="education-institution">Sri Sairam Engineering College</div>
              </div>
            </div>
            
            <div className="education-marker marker-3">
              <div className="marker-pin">
                <div className="marker-icon future-marker">
                  <i className="bx bx-question-mark"></i>
                </div>
                <div className="marker-stem"></div>
              </div>
              <div className="education-card future-card">
                <div className="education-year">Future Plans</div>
                <div className="education-degree">Next Chapter</div>
                <div className="education-stream">To be determined...</div>
                <div className="education-institution">The journey continues</div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}

export default Education;