import React, { useState, useEffect } from 'react';

function ThemeToggle() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const saved = localStorage.getItem('portfolio-theme');
    if (saved) {
      setTheme(saved);
      document.documentElement.setAttribute('data-theme', saved);
    }
  }, []);

  const handleTheme = (newTheme) => {
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('portfolio-theme', newTheme);
  };

  return (
    <div className="theme-toggle">
      <button
        className={`theme-btn ${theme === 'dark' ? 'active' : ''}`}
        onClick={() => handleTheme('dark')}
        title="Dark Mode"
      >
        🌙
      </button>
      <button
        className={`theme-btn ${theme === 'beige' ? 'active' : ''}`}
        onClick={() => handleTheme('beige')}
        title="Beige Mode"
      >
        📜
      </button>
    </div>
  );
}

export default ThemeToggle;
