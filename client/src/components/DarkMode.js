import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';

const DarkMode = () => {
  const [darkMode, setDarkMode] = useDarkMode(true);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Women's World Cup Player Stats</h1>
      <div className="dark-mode__toggle">
        <button onClick={toggleMode}
        data-testid="toggle"
          className={darkMode ? 'toggle toggled' : 'toggle'}>{darkMode === true ? "Light Mode" : "Dark Mode"}</button>
      </div>
    </nav>
  );
};

export default DarkMode;
