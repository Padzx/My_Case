import React, { useState, useEffect } from 'react';
import './skillsComponent.css'
import { FaReact, FaHtml5, FaCss3Alt, FaVuejs, FaJsSquare } from 'react-icons/fa';


const Skills = () => {
  return (
    <div className="skills-container">
      <div className='container-skills'>
        <h1>Skills Set</h1>
      </div>
      <div>
        <Frontend />
      </div>
    </div>
  );
}


export default Skills;

const Frontend = () => {
  return (
    <div className='container-frontend'>
      <h1>Frontend</h1>
      <div className="frontend-icons">
        <FaReact className="react-icon" />
        <NivelExperiencia nivel={3} />
        <FaHtml5 className="html-icon" />
        <NivelExperiencia nivel={3} />
        <div>
        <FaCss3Alt className="css-icon" />
        <NivelExperiencia nivel={3} />
        </div>
        <FaVuejs className="vue-icon" />
        <NivelExperiencia nivel={3} />
        <FaJsSquare className="js-icon" />
        <NivelExperiencia nivel={3} />
      </div>
    </div>
  );
}

const NivelExperiencia = ({ nivel }) => {
  const renderBolinhas = () => {
    const bolinhas = [];

    for (let i = 1; i <= 4; i++) {
      if (i <= nivel) {
        bolinhas.push(<div key={i} className="bolinha marcada" />);
      } else {
        bolinhas.push(<div key={i} className="bolinha" />);
      }
    }

    return bolinhas;
  };

  return (
    <div className="nivel-experiencia">
      {renderBolinhas()}
    </div>
  );
};
