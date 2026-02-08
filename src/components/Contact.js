import React from 'react';

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2>Get in <span>Touch</span></h2>
        <p className="contact-subtitle">Feel free to reach out to me for any opportunities or collaborations!</p>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-info-item">
              <i className="bx bx-envelope"></i>
              <h4>Email</h4>
              <p>pratyushsowrirajan@gmail.com</p>
            </div>
            <div className="contact-info-item">
              <i className="bx bx-phone"></i>
              <h4>Phone</h4>
              <p>+91 93848 43883</p>
            </div>
            <div className="contact-info-item">
              <i className="bx bx-map"></i>
              <h4>Location</h4>
              <p>Chennai, Tamil Nadu, India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
