import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaReact } from 'react-icons/fa';
import "./homeComponent.css" 

const Home = () => {
  const words = ['Frontend.', 'Data Analytics.', 'Devops Engineer.'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState('');
  const [typingForward, setTypingForward] = useState(true);

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
    }, 100);

    return () => clearInterval(wordInterval);
  }, [currentWord, currentWordIndex, typingForward, words]);

  return (
    <div className={`title`}>
      <h1>Hi There! I'm Gabriel Padilha.</h1>
      <div className="animated-text">{currentWord}</div>
      <div className="icon-container">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="icon-git">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="icon-li">
          <FaLinkedin />
        </a>
        <div className="icon-react-rotate">
          <FaReact className="icon-react" />
        </div>
      </div>
    </div>
  );
};

export default Home;
