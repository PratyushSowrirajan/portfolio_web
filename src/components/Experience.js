import React from 'react';

function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="experience-content">
        <h2>My <span>Experience</span></h2>
        <p>Here are some of my professional experiences and internships...</p>
        
        <div className="timeline">
          {/* Zoho Corporation */}
          <div className="timeline-item">
            <div className="timeline-date">June 2025 - July 2025</div>
            <div className="timeline-content">
              <h3>Extension Developer Intern</h3>
              <h4>Zoho Corporation</h4>
              <p className="location">Tenkasi, Tamil Nadu | 33 days</p>
              <p>
                <strong>Built:</strong> Zoho CRM extension integrating Telegram for secure two-way communication
                <br />
                <strong>Learned:</strong> Zoho Sigma, Deluge, OAuth authentication, API integration
                <br />
                <strong>Impact:</strong> Reduced manual communication by ~60%, tested with 50+ CRM records
              </p>
              <div className="tech-stack">
                <span>Zoho Sigma</span>
                <span>Deluge</span>
                <span>REST APIs</span>
                <span>Telegram Bot API</span>
                <span>OAuth</span>
              </div>
            </div>
            <div className="timeline-images">
              <div className="company-logo">
                <img src="Zoho_Corporation-Logo.wine.png" alt="Zoho Corporation Logo" />
              </div>
              <div className="experience-photos">
                <img src="IMG1_ZOHO.jpeg" alt="Pratyush at Zoho Office" />
                <img src="IMG2_ZOHO.jpeg" alt="Zoho Internship Experience" />
              </div>
            </div>
          </div>

          {/* Anna University */}
          <div className="timeline-item">
            <div className="timeline-date">July 2024</div>
            <div className="timeline-content">
              <h3>IoT Intern (In-House Program)</h3>
              <h4>College of Engineering, Guindy – Anna University</h4>
              <p className="location">Chennai, Tamil Nadu | 5 days</p>
              <p>
                <strong>Built:</strong> IoT-based Dam Water Monitoring System with ESP32/Arduino
                <br />
                <strong>Learned:</strong> Embedded systems, sensor integration, real-time monitoring
                <br />
                <strong>Achievement:</strong> Sub-2-second alert latency for overflow detection
              </p>
              <div className="tech-stack">
                <span>ESP32</span>
                <span>Arduino Uno</span>
                <span>Embedded C</span>
                <span>Sensors</span>
              </div>
            </div>
            <div className="timeline-images">
              <div className="company-logo">
                <img src="anna-university3770.jpg" alt="Anna University Logo" />
              </div>
              <div className="experience-photos">
                <img src="img1_annaUni.jpeg" alt="Anna University IoT Workshop" />
                <img src="img2_annaUni.jpeg" alt="IoT Project Development" />
              </div>
            </div>
          </div>

          {/* Zero Tech Solutions */}
          <div className="timeline-item">
            <div className="timeline-date">February 2024</div>
            <div className="timeline-content">
              <h3>Front End Developer Intern</h3>
              <h4>Zero Tech Solutions</h4>
              <p className="location">Chennai, Tamil Nadu | 15 days</p>
              <p>
                <strong>Built:</strong> Personal portfolio website with pure HTML/CSS
                <br />
                <strong>Learned:</strong> Responsive design, version control, deployment workflows
                <br />
                <strong>Deployed:</strong> Live site via Netlify with GitHub integration
              </p>
              <div className="tech-stack">
                <span>HTML</span>
                <span>CSS</span>
                <span>GitHub</span>
                <span>Netlify</span>
              </div>
              <a href="https://pratyushweb.netlify.app/" target="_blank" rel="noopener noreferrer" className="portfolio-link">
                View Portfolio →
              </a>
            </div>
            <div className="timeline-images">
              <div className="company-logo">
                <img src="zero_schools-removebg-preview.png" alt="Zero Tech Solutions Logo" />
              </div>
              <div className="experience-photos">
                <img src="WEB_DEV.png" alt="Zero Tech Solutions Work" />
                <img src="WEB_DEV2.png" alt="Portfolio Development" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
