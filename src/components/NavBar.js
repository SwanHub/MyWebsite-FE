import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'
import { Spring } from 'react-spring/renderprops';

export default function NavBar() {
    return (
        <header>
            <NavLink to="/home">[ JacksonPrince ] </NavLink>
        </header>
    )
}
