import React, { useState, useEffect } from 'react';
import './skillsComponent.css'
import { FaReact, FaHtml5, FaCss3Alt, FaVuejs, FaJsSquare } from 'react-icons/fa';
import { FaJava} from 'react-icons/fa';
import { SiDjango, SiMongodb } from "react-icons/si";
import { BiLogoFlask } from "react-icons/bi";
import { TbHexagonNumber1, TbHexagonNumber2, TbHexagonNumber3 } from "react-icons/tb";


const Skills = () => {
  const [selectedContainer, setSelectedContainer] = useState('');

  const handleIconClick = (container) => {
    setSelectedContainer(container);
  };

  return (
    <div className="skills-container">
      <div className="container-skills">
        <h1>Skills Set</h1>
      </div>
      <div>
        {(selectedContainer === 'frontend' || selectedContainer === 'backend') && (
          <>
            <Frontend />
            <Backend />
          </>
        )}
        {selectedContainer === 'devops' && <DevOps />}
      </div>
      <div className="icons-navigation">
        <TbHexagonNumber1 className="one-filter" onClick={() => handleIconClick('frontend')} />
        <TbHexagonNumber2 className="two-filter" onClick={() => handleIconClick('devops')} />
        <TbHexagonNumber3 className="three-filter" onClick={() => handleIconClick('devops')} />
      </div>
    </div>
  );
};

export default Skills;


const Frontend = () => {
  return (
    <div className='container-frontend'>
      <h1>Frontend</h1>
      <div className="frontend-icons">
        <div className="icon-with-nivel react">
          <FaReact className="react-icon" />
          <NivelExperiencia nivel={3} prefix="frontend" />
          <span className="nivel-text">Intermediário</span>
        </div>
        <div className="icon-with-nivel-html">
          <FaHtml5 className="html-icon" />
          <NivelExperiencia nivel={3} prefix="frontend" />
          <span className="nivel-text-html">Intermediário</span>
        </div>
        <div className="icon-with-nivel-css">
          <FaCss3Alt className="css-icon" />
          <NivelExperiencia nivel={3} prefix="frontend" />
          <span className="nivel-text-css">Intermediário</span>
        </div>
        <div className="icon-with-nivel-vue">
          <FaVuejs className="vue-icon" />
          <NivelExperiencia nivel={3} prefix="frontend" />
          <span className="nivel-text">Intermediário</span>
        </div>
        <div className="icon-with-nivel-js">
          <FaJsSquare className="js-icon" />
          <NivelExperiencia nivel={3} prefix="frontend" />
          <span className="nivel-text-js">Intermediário</span>
        </div>
      </div>
    </div>
  );
}


const NivelExperiencia = ({ nivel }) => {
  const renderBolinhas = () => {
    const bolinhas = [];

    for (let i = 1; i <= 4; i++) {
      if (i <= nivel) {
        bolinhas.push(<div key={i} className={`bolinha marcada`} />);
      } else {
        bolinhas.push(<div key={i} className={`bolinha`} />);
      }
    }

    return bolinhas;
  };

  return (
    <div className={`nivel-experiencia`}>
      {renderBolinhas()}
    </div>
  );
};


const Backend = () => {
  return (
    <div className='container-backend'>
      <h1>Backend</h1>
      <div className="backend-icons">
        <div className="icon-with-nivel-java">
          <FaJava className="java-icon" />
          <NivelExperienciaBackend nivel={1} prefix="backend-java" />
          <span className="nivel-text-java">Introdutório</span>
        </div>
        <div className="icon-with-nivel-flask">
          <BiLogoFlask className="flask-icon" />
          <NivelExperienciaBackend nivel={1} prefix="backend-flask" />
          <span className="nivel-text-flask">Introdutório</span>
        </div>
        <div className="icon-with-nivel-django">
          <SiDjango className="django-icon" />
          <NivelExperienciaBackend nivel={1} prefix="backend-django" />
          <span className="nivel-text-django">Introdutório</span>
        </div>
        <div className="icon-with-nivel-mongodb">
          <SiMongodb className="mongodb-icon" />
          <NivelExperienciaBackend nivel={1} prefix="backend-mongodb" />
          <span className="nivel-text-mongodb">Introdutório</span>
        </div>
      </div>
    </div>
  );
}

const NivelExperienciaBackend = ({ nivel, prefix }) => {
  const renderBolinhas = () => {
    const bolinhas = [];

    for (let i = 1; i <= 4; i++) {
      if (i <= nivel) {
        bolinhas.push(<div key={i} className={`bolinha marcada ${prefix}-bolinha-marcada`} />);
      } else {
        bolinhas.push(<div key={i} className={`bolinha ${prefix}-bolinha`} />);
      }
    }

    return bolinhas;
  };

  return (
    <div className={`nivel-experiencia ${prefix}-nivel-experiencia`}>
      {renderBolinhas()}
    </div>
  );
};

const DevOps = () => {
  return (
    <div className='container-devops'>
      <h1>DevOps</h1>
      <div className="devops-icons">
        <div className="icon-with-nivel-aws">
          
          <NivelExperiencia nivel={3} prefix="devops" />
          <span className="nivel-text-aws">Intermediário</span>
        </div>
        <div className="icon-with-nivel-docker">
          
          <NivelExperiencia nivel={3} prefix="devops" />
          <span className="nivel-text-docker">Intermediário</span>
        </div>
        {/* Adicione outros ícones DevOps aqui com suas respectivas bolinhas de nível de experiência */}
      </div>
    </div>
  );
}