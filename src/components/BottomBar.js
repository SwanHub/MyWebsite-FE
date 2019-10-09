import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'
import { Spring } from 'react-spring/renderprops';
import Quill from './cards/icons/Quill'
import Puzzle from './cards/icons/Puzzle'
import Bulb from './cards/icons/Bulb'
import HomeIcon from './cards/icons/HomeIcon'

export default class BottomBar extends Component {
    
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
            <Spring from={{opacity: 0}} 
                    to={{opacity:1}}>
            {props => (
                <div style={props}>
                    <footer className="navbar">
                        <div>
                        <NavLink to="/projects"><Bulb handleLink={this.handleLink}/>
                            <br/>
                            <small className={this.state.activeLink === 'bulb' 
                                        ? "active-navicon" 
                                        : "hide-navicon"}>
                                    Projects</small>
                        </NavLink>
                        </div>

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
                    </footer>
                </div>
            )}
            </Spring>
        )
    }
}
