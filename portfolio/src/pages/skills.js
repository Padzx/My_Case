import React, { useState, useEffect } from 'react';
import './skillsComponent.css'


const Skills = () => {
    return (
      <div>
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

    return(
        <div className='container-frontend'>
        <h1>Frontend</h1>
        </div>

    )
}

