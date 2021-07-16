import React, { useState } from 'react';
import '../styles.css' ;
import HomeContent from './HomeContent';
import { NavLink } from 'react-router-dom';
import Mobilemenu from './MobileMenu';

export default function Navbar() {
    const [menu, showMenu] = useState(false);
    
    return (
       
        <div className= {menu? "container  active" : "container "}>
            
            <div className="navbar">
                <div className="menu">
                    <h2 className="logo">Rashmi<span> Thakur</span></h2>
                    <div className="hamburger-menu" onClick={()=>showMenu(!menu)}>
                        <div className="bar" ></div>
                    </div>
                </div>
                <div className= {menu? "mobile-menu  active" : "mobile-menu "}>
                 <ul className= {menu? "active" : ""}>
                    <li><NavLink exact to="/" data-after='Home'>Home</NavLink></li>
                    <li><NavLink exact to="./About" data-after='About' >About</NavLink></li>
                    <li><NavLink exact to="./Projects" data-after='Projects' >Projects</NavLink></li>
                    <li><NavLink exact to="./Poems" data-after='Poem' >Poem</NavLink></li>
                    <li><NavLink exact to="./Contact" data-after='Contact' >Contact</NavLink></li>
                 </ul>
                </div>
            </div>
         
            <HomeContent/>

            <div className="links">
                    <ul>
                        <li><NavLink exact to="/" >Home</NavLink></li>
                        <li><NavLink exact to="./About"  >About</NavLink></li>
                        <li><NavLink exact to="./Projects"  >Projects</NavLink></li>
                        <li><NavLink exact to="./Poems"  >Poem</NavLink></li>
                        <li><NavLink exact to="./Contact"  >Contact</NavLink></li>
                    </ul>
            </div>
        </div>
        
      
    )
}
