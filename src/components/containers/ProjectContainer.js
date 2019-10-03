import React from 'react'
import Project from '../cards/Project'

export default function ProjectContainer(props) {

    const renderProjects = () => {        
        return props.projects.map(project => {
            return <Project name={project.project.name}/>
        })
    }
    
    return (
        <div className="projects-container">
            {renderProjects()}
        </div>
    )
}
