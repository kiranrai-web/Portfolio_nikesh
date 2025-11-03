import React from 'react'

import "./Projects.css"
import { ProjectShowCase } from '../../component'

const Projects = () => {
  return (
    <div className='section__padding p__roboto projects__wrapper' id='project'>
      <h1>My Projects</h1>
      <p>Produced diverse video projects with polished visuals, compelling storytelling,<br/> and high-quality editing..</p>
      <div className="projects__container">
        <ProjectShowCase/>
      </div>
    </div>
  )
}

export default Projects
