import React from 'react';

function Recognition() {
  return (
    <section className="recognition" id="recognition">
      <div className="recognition-container">
        <h2>Recognition & <span>Achievements</span></h2>
        
        <div className="recognition-grid">
          <div className="recognition-card">
            <div className="recognition-icon">
              <img src="sih.png" alt="Smart India Hackathon" />
            </div>
            <div className="recognition-content">
              <h3>SIH 2025 Finalist</h3>
              <p>Smart India Hackathon National Finalist</p>
            </div>
          </div>

          <div className="recognition-card highlight">
            <div className="recognition-icon">
              <img src="ieee.png" alt="IEEE SIGHT" />
            </div>
            <div className="recognition-content">
              <h3>IEEE SIGHT T4G Grant Recipient</h3>
              <p>Recipient of USD 6,508 IEEE SIGHT T4G Grant for Technology for Good initiatives</p>
            </div>
          </div>

          <div className="recognition-card">
            <div className="recognition-icon">
              <img src="patent.png" alt="Indian Patent" />
            </div>
            <div className="recognition-content">
              <h3>Indian Patent Published</h3>
              <p>Glaucoma Diagnosis System with Knowledge Distillation for Mobile Deployment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Recognition;
