import React, {Component} from 'react'

export default class Project extends Component {

    state = {
        active: false
    }

    handleHoverToggle = () => {
        this.setState({
            active: !this.state.active
        })
    }

    displayProjects = (project, projects) => {
        return projects[project].Languages.map(language => {
            return <span>{language.Name}</span>
        })
    }

    render(){
        const { projects, project } = this.props
        return (
            <div className="project-card" 
            onMouseEnter={this.handleHoverToggle} 
            onMouseLeave={this.handleHoverToggle}>
            {/* {this.state.active ? <span className="project-pointer">&#9758;</span> : null}   */}
                <div className="project-name">
                    <a target="_blank" style={this.state.active ? {color: 'rgb(0,0,0)'} : null } href={projects[project].Url}>
                        {projects[project].Name}
                        <>{this.displayProjects(project, projects)}</>
                    </a>
                </div>
                <div className="project-description">{projects[project].Description}</div>
            </div>
        )
    }
    
}
