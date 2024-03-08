import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaBook, FaLaptopCode, FaProjectDiagram } from 'react-icons/fa'; // Importe os ícones adicionais
import './NavBarComponent.css';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className={`navbar ${isActive ? 'active' : ''}`}>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className="navbar-menu">
        <li><NavLink exact to="/home" activeClassName="active"><FaHome /></NavLink></li>
        <li><NavLink to="/aboutme" activeClassName="active"><FaBook /></NavLink></li>
        <li><NavLink to="/skills" activeClassName="active"><FaLaptopCode /></NavLink></li> {/* Adicione o ícone para Skills */}
        <li><NavLink to="/projects" activeClassName="active"><FaProjectDiagram /></NavLink></li> {/* Adicione o ícone para Projects */}
      </ul>
    </nav>
  );
};

export default Navbar;
