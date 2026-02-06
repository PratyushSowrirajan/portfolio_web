import React, { useState, useEffect } from 'react';

function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageIndexes, setImageIndexes] = useState({});

  const projects = [
    {
      id: 1,
      title: "Telegram for Zoho CRM",
      description: "A Zoho CRM extension that connects Telegram with CRM and enables two-way message and alert flow.",
      images: ["/zoho/tel1.jpeg", "/zoho/tel2.jpeg", "/zoho/tel3.jpeg"],
      github: "https://github.com/PratyushSowrirajan/telegram-zoho-bott",
      demo: "/zoho/help documentation.pdf",
      tech: ["Zoho Sigma", "Node.js", "Telegram Bot API"]
    },
    {
      id: 2,
      title: "Project 2",
      description: "Project description will go here...",
      images: ["project2.jpg"],
      github: "#",
      demo: "#",
      tech: ["Tech1", "Tech2", "Tech3"]
    },
    {
      id: 3,
      title: "Project 3",
      description: "Project description will go here...",
      images: ["project3.jpg"],
      github: "#",
      demo: "#",
      tech: ["Tech1", "Tech2", "Tech3"]
    },
    {
      id: 4,
      title: "Project 4",
      description: "Project description will go here...",
      images: ["project4.jpg"],
      github: "#",
      demo: "#",
      tech: ["Tech1", "Tech2", "Tech3"]
    }
  ];

  // Auto-rotate images within each project
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndexes(prev => {
        const newIndexes = { ...prev };
        projects.forEach(project => {
          if (project.images.length > 1) {
            const currentIndex = newIndexes[project.id] || 0;
            newIndexes[project.id] = (currentIndex + 1) % project.images.length;
          }
        });
        return newIndexes;
      });
    }, 2500); // Change image every 2.5 seconds

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="projects" id="projects">
      <div className="projects-content">
        <h2>My <span>Projects</span></h2>
        <p>Here are some of the projects I've been working on...</p>
        
        <div className="carousel-container">
          <div className="carousel">
            {projects.map((project, index) => {
              const currentImageIndex = imageIndexes[project.id] || 0;
              const currentImage = project.images[currentImageIndex];
              
              return (
                <div
                  key={project.id}
                  className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
                >
                  <div className="project-card">
                    <div className="project-image">
                      <img src={currentImage} alt={project.title} />
                    </div>
                    <div className="project-description">
                      <p>{project.description}</p>
                    </div>
                    <div className="project-header">
                      <div className="project-title-section">
                        <h3>{project.title}</h3>
                        <div className="project-tech">
                          {project.tech.map((tech, i) => (
                            <span key={i}>{tech}</span>
                          ))}
                        </div>
                      </div>
                      <div className="project-links">
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-btn">
                          <i className="bx bxl-github"></i> GitHub
                        </a>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-btn">
                          <i className="bx bx-file"></i> Docs
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Buttons */}
          <button className="carousel-btn prev" onClick={prevSlide}>
            <i className="bx bx-chevron-left"></i>
          </button>
          <button className="carousel-btn next" onClick={nextSlide}>
            <i className="bx bx-chevron-right"></i>
          </button>

          {/* Dots Indicator */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
