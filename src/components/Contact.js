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
              <p>pratyush.sowrirajan@example.com</p>
            </div>
            <div className="contact-info-item">
              <i className="bx bx-phone"></i>
              <h4>Phone</h4>
              <p>+91 98765 43210</p>
            </div>
            <div className="contact-info-item">
              <i className="bx bx-map"></i>
              <h4>Location</h4>
              <p>India</p>
            </div>
          </div>

          <form className="contact-form">
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
            </div>
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit" className="btn contact-btn">
              <span>Send Message</span>
              <i className="bx bx-send"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
