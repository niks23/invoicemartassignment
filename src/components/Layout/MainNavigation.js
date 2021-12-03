import React from 'react';
import { NavLink } from 'react-router-dom';
import './MainNavigation.scss';
const MainNavigation = () => {
    return (
        <header>
            <h1>Invoicemart</h1>
            <nav>
                <ul>
                    <li><NavLink to="/">Homepage</NavLink></li>
                    <li><NavLink to="/posts">posts</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;