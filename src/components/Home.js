import React, { useEffect, useState, useRef, useCallback } from 'react';

const texts = [
  'a Software Developer',
  'a Bibliophile',
  'a Web Developer',
  'an ML Enthusiast'
];

function Home() {
  const [displayText, setDisplayText] = useState('');
  const textIndexRef = useRef(0);
  const charIndexRef = useRef(0);
  const isDeletingRef = useRef(false);
  
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseTime = 1500;

  const typeWriter = useCallback(() => {
    const currentText = texts[textIndexRef.current];
    
    if (!isDeletingRef.current) {
      // Typing
      setDisplayText(currentText.substring(0, charIndexRef.current + 1));
      charIndexRef.current++;
      
      if (charIndexRef.current === currentText.length) {
        // Finished typing current text, pause then start deleting
        setTimeout(() => {
          isDeletingRef.current = true;
          typeWriter();
        }, pauseTime);
        return;
      }
      
      setTimeout(typeWriter, typingSpeed);
    } else {
      // Deleting
      setDisplayText(currentText.substring(0, charIndexRef.current - 1));
      charIndexRef.current--;
      
      if (charIndexRef.current === 0) {
        // Finished deleting, move to next text
        isDeletingRef.current = false;
        textIndexRef.current = (textIndexRef.current + 1) % texts.length;
        setTimeout(typeWriter, 500);
        return;
      }
      
      setTimeout(typeWriter, deletingSpeed);
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(typeWriter, 1000);
    return () => clearTimeout(timer);
  }, [typeWriter]);

  const handleResumeDownload = (e) => {
    e.preventDefault();
    // Use process.env.PUBLIC_URL for proper path resolution in React
    const link = document.createElement('a');
    link.href = process.env.PUBLIC_URL + '/resume/PratyushS_Resume.pdf';
    link.download = 'Pratyush_Sowrirajan_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="home" id="home">
      <div className="home-content">
        <h1>Hi, It's <span>Pratyush</span></h1>

        <h3>I'm <span id="typewriter">{displayText}</span><span className="cursor"></span></h3>
        <p>"The only thing that is doing the thing is doing the thing." - By strangest loop</p>

        <div className="home-socials">
          <a href="https://github.com/PratyushSowrirajan" target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/pratyushsowrirajan" target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-linkedin-square"></i>
          </a>
          <a href="https://www.instagram.com/pratz_00/" target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-instagram-alt"></i>
          </a>
        </div>

        <div className="home-btn">
          <a href="#resume" className="btn" id="resume-btn" onClick={handleResumeDownload}>Resume</a>
          <a href="#contact" className="btn">Contact</a>
        </div>
      </div>

      <div className="home-img">
        <img src="image.jpg" alt="Pratyush" />
      </div>
    </section>
  );
}

export default Home;
