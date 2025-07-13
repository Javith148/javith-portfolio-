import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css'
const NavBar = () => {
    return (
        <nav className="navbar">

            <div className="nav-links">
                <NavLink
                    to="/"
                    className={({ isActive }) => 'nav-item' + (isActive ? ' active' : '')}
                >
                    Home
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) => 'nav-item' + (isActive ? ' active' : '')}
                >
                    About
                </NavLink>
                <NavLink
                    to="/skill"
                    className={({ isActive }) => 'nav-item' + (isActive ? ' active' : '')}
                >
                    Skills
                </NavLink>

                <NavLink
                    to="/certificate"
                    className={({ isActive }) => 'nav-item' + (isActive ? ' active' : '')}
                >
                    Certificate
                </NavLink>

                <NavLink
                    to="/projects"
                    className={({ isActive }) => 'nav-item' + (isActive ? ' active' : '')}
                >
                    Projects
                </NavLink>

                <NavLink
                    to="/contact"
                    className={({ isActive }) => 'nav-item' + (isActive ? ' active' : '')}
                >
                    Contact
                </NavLink>
            </div>
        </nav>
    );
};

export default NavBar;
