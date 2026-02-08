import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Recognition from './components/Recognition';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <div className="App">
      <ThemeToggle />
      <Home />
      <About />
      <Recognition />
      <Education />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
