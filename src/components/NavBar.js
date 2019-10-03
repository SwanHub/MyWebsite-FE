import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'
import { Spring } from 'react-spring/renderprops';
import Astro from './cards/icons/Astro'
import Quill from './cards/icons/Quill'
import Puzzle from './cards/icons/Puzzle'
import Bulb from './cards/icons/Bulb'
import HomeIcon from './cards/icons/HomeIcon'

export default class NavBar extends Component {
    
    state = {
        activeLink: 'none'
    }

    handleLink = (input) => {
        this.setState({
            activeLink: input
        })
    }

    render(){
        return (
            <Spring from={{opacity: 0, marginTop: -300}} 
                    to={{opacity:1, marginTop: 0}}>
            {props => (
                <div style={props}>
                    <header className="navbar">
                        <div><NavLink to="/home"><HomeIcon handleLink={this.handleLink}/>
                        <br/>
                        <small className={this.state.activeLink === 'home' 
                                    ? "active-navicon" 
                                    : "hide-navicon"}>
                                Home</small>
                        </NavLink></div>
                        
                        <div><NavLink to="/projects"><Bulb handleLink={this.handleLink}/>
                        <br/>
                        <small className={this.state.activeLink === 'bulb' 
                                    ? "active-navicon" 
                                    : "hide-navicon"}>
                                Projects</small>
                        </NavLink></div>

                        <div><NavLink to="/games"><Puzzle handleLink={this.handleLink}/>
                        <br/>
                        <small className={this.state.activeLink === 'puzzle' 
                                    ? "active-navicon" 
                                    : "hide-navicon"}>
                                Games</small>
                        </NavLink></div>
                    
                        <div><NavLink to="/articles"><Quill handleLink={this.handleLink}/>
                        <br/>
                        <small className={this.state.activeLink === 'quill' 
                                    ? "active-navicon" 
                                    : "hide-navicon"}>
                                Publications</small>
                        </NavLink></div>

                        <div><NavLink to="/experience"><Astro handleLink={this.handleLink}/>
                        <br/>
                        <small className={this.state.activeLink === 'astro' 
                                    ? "active-navicon" 
                                    : "hide-navicon"}>
                                Experiences</small>
                        </NavLink></div>
                    </header>
                </div>
            )}
            </Spring>
        )
    }
}
