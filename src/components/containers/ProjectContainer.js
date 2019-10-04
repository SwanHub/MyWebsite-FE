import React from 'react'
import Project from '../cards/Project'

export default function ProjectContainer(props) {

    const renderProjects = () => {      
        const projects = Object.keys(props.projects) 

        let projectsArr = []

        for (const project of projects){
            projectsArr.push(
                <div className="project-card">
                    <div>{props.projects[project].Name}</div>
                    <div>{props.projects[project].Description}</div>
                    <div>{props.projects[project].Url}</div>
                </div>
            )
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
