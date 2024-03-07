import { IoIosMoon, IoIosSunny, IoLogoLinkedin, IoLogoGithub } from "react-icons/io";
import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const words = ['Frontend.', 'Data Analytics.', 'Devops Engineer.'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState('');
  const [typingForward, setTypingForward] = useState(true);
  const [isMoonActive, setIsMoonActive] = useState(false);
  const [isSunActive, setIsSunActive] = useState(false);

  useEffect(() => {
    const wordInterval = setInterval(() => {
      const word = words[currentWordIndex];

      if (typingForward) {
        setCurrentWord((prevWord) => {
          if (prevWord === word) {
            setTypingForward(false);
            return prevWord;
          }

          const nextChar = word.charAt(prevWord.length);
          return prevWord + nextChar;
        });
      } else {
        setCurrentWord((prevWord) => prevWord.slice(0, -1));

        if (currentWord === '') {
          setTypingForward(true);
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }
      }
    }, 100); // Ajuste a velocidade da animação conforme necessário

    return () => clearInterval(wordInterval);
  }, [currentWord, currentWordIndex, typingForward, words]);

  const handleMoonClick = () => {
    setIsMoonActive(true);
    setIsSunActive(false);
    document.body.classList.add('dark-mode');
  };

  const handleSunClick = () => {
    setIsMoonActive(false);
    setIsSunActive(true);
    document.body.classList.remove('dark-mode');
  };

  return (
    <div className={`title ${isMoonActive ? 'dark-mode' : 'light-mode'}`}>
      <h1>Hi There! I'm Gabriel Padilha.</h1>
      <div className="icon-container">
        <div className={`icon ${isMoonActive ? 'active' : ''}`} onClick={handleMoonClick}>
          <IoIosMoon />
        </div>
        <div className={`icon ${isSunActive ? 'active' : ''}`} onClick={handleSunClick}>
          <IoIosSunny />
        </div>
        <button className="toggle-button">Toggle</button>
        <div>
        <IoLogoLinkedin className="icon-work-li" />
        <IoLogoGithub className="icon-work-gt" />
        </div>
      </div>
      <div className="animated-text">
        {currentWord}
      </div>
    </div>
  );
}

export default App;
