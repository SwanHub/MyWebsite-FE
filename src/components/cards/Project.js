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

    render(){
        return (
            <div className="project-card" 
            onMouseEnter={this.handleHoverToggle} 
            onMouseLeave={this.handleHoverToggle}>
            {/* {this.state.active ? <span className="project-pointer">&#9758;</span> : null}   */}
                <div className="project-name">
                    <a target="_blank" style={this.state.active ? {color: 'rgb(0,0,0)'} : null }href={this.props.projects[this.props.project].Url}>
                        {this.props.projects[this.props.project].Name}
                        <span>{this.props.projects[this.props.project].Languages[0].Name} | {this.props.projects[this.props.project].Languages[1].Name}</span>
                    </a>
                </div>
                <div className="project-description">{this.props.projects[this.props.project].Description}</div>
            </div>
        )
    }
    
}
