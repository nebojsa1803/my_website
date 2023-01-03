import React, { useState } from 'react'
import Card from '../components/Card'
import { projectsArray } from '../projects/prjArray/projects'

function Projects() {
  const [projects, setProjects] = useState(projectsArray)
  return (
    <div className='projects'>
      <div className='projects-title'>
        {' '}
        <h1>My Projects</h1>
      </div>
      <div className='projects-cards'>
        <div div className='cards'>
          {projects.map((project) => (
            <Card key={project.id} {...project} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
