import React from 'react'
import { NavLink } from 'react-router-dom';
export default function Menu({ menu, showMenu }) {
    return (
        <div>
            <div className={menu ? "mobile-menu  active" : "mobile-menu "}>
                <ul className={menu ? "active" : ""}>
                    <li onClick={() => showMenu(!menu)}><NavLink exact to="/" data-after='Home'>Home</NavLink></li>
                    <li><NavLink exact to="./About" data-after='About' >About</NavLink></li>
                    <li><NavLink exact to="./Skills" data-after='Skills' >Skills</NavLink></li>
                    <li><NavLink exact to="./Projects" data-after='Projects' >Projects</NavLink></li>
                    <li><NavLink exact to="./Poems" data-after='Poem' >Poem</NavLink></li>
                    <li><NavLink exact to="./Contact" data-after='Contact' >Contact</NavLink></li>
                </ul>
            </div>
        </div>
    )
}
