import React from 'react'
import { NavLink } from 'react-router-dom'
import HomeIcon from './cards/icons/HomeIcon'

export default function NavBar() {
    return (
        <header>
            <span id="location">San Francisco, CA</span>
            <NavLink to="/">[ JacksonPrince ] <HomeIcon /></NavLink>
        </header>
    )
}
