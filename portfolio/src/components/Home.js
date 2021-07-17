import React, { useState } from 'react';
import '../styles.css';
import HomeContent from './HomeContent';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import Menu from './Menu';

export default function Home() {
    const [menu, showMenu] = useState(false);

    return (
        <>

            <div className={menu ? "container  active" : "container "}>
                <div className="navbar">
                    <Navbar menu = {menu} showMenu={showMenu}/>
                    <Menu menu={menu} showMenu={showMenu}/>
                </div>

                <HomeContent />

                <div className="links">
                    <ul>
                        <li onClick={() => showMenu(!menu)}><NavLink exact to="/" >Home</NavLink></li>
                        <li><NavLink exact to="./About"  >About</NavLink></li>
                        <li><NavLink exact to="./Skills" >Skills</NavLink></li>
                        <li><NavLink exact to="./Projects"  >Projects</NavLink></li>
                        <li><NavLink exact to="./Poems"  >Poem</NavLink></li>
                        <li><NavLink exact to="./Contact"  >Contact</NavLink></li>
                    </ul>
                </div>
            </div>

        </>
    )
}
