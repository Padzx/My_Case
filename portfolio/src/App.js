// App.js
import React, { useState } from 'react';
import { IoIosMoon, IoIosSunny } from 'react-icons/io';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Aboutme from './pages/aboutme';
import Skills from './pages/skills';
import { ThemeProvider } from './components/ThemeContext'; // Import ThemeProvider
import './App.css';
import Navbar from './components/NavBar'; // Import Navbar Component

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleMoonClick = () => {
    setIsDarkMode(true);
    document.body.classList.add('dark-mode');
  };

  const handleSunClick = () => {
    setIsDarkMode(false);
    document.body.classList.remove('dark-mode');
  };

  return (
    <ThemeProvider>
      <div className={`title ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
        <div className="icon-container">
          <div className={`icon ${isDarkMode ? 'active' : ''}`} onClick={handleMoonClick}>
            <IoIosMoon />
          </div>
          <div className={`icon ${isDarkMode ? '' : 'active'}`} onClick={handleSunClick}>
            <IoIosSunny />
          </div>
        </div>
        <button className="toggle-button">Toggle</button>
      </div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/aboutme" element={<Aboutme />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
