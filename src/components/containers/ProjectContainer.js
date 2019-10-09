import React from 'react'
import {NavLink} from 'react-router-dom'
import Project from '../cards/Project'

export default function ProjectContainer(props) {

    const renderProjects = () => {      
        const projects = Object.keys(props.projects) 

        let projectsArr = []

        for (const project of projects){
            projectsArr.push( <Project projects={props.projects} project={project}/>)
        }
        return projectsArr
    }
    
    return (
        <div className="projects-container">
            <img src="https://img.icons8.com/color/48/000000/firebase.png"></img>
            <img src="https://img.icons8.com/color/48/000000/heroku.png"></img>
            <p>Deployed Projects</p>
            {renderProjects()}
        </div>
    )
}
