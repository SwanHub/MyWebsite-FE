import React from 'react'
import { NavLink } from 'react-router-dom'
import HomeIcon from './cards/icons/HomeIcon'
import Contact from './cards/Contact'

export default function NavBar() {
    return (
        <header>
            <span id="location">San Francisco, CA | <em>Site built in Go and React</em></span>
            <NavLink to="/">[ Jackson Prince ] <HomeIcon /></NavLink>
        </header>
    )
}
