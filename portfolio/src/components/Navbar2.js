import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import '../styles.css'
export default function Navbar2(props) {
    const [options, setoptions] = useState(false)
    return (
        <div>
            <div className="navbar2" style={{ backgroundColor: "teal" }}>
                <div className="menu" >
                    <h2 className="logo">Rashmi<span> Thakur</span></h2>
                    <div className="hamburger-menu" onClick={() => setoptions(!options)}>
                        <div className="bar" ></div>
                    </div>
                </div>
            </div>
            <div className={options ? "mobile-menu  active" : "mobile-menu "}>
                <ul className={options ? "active" : ""}>
                    <li onClick={() => setoptions(!options)}><NavLink exact to="/" data-after='Home'>Home</NavLink></li>
                    <li onClick={() => setoptions(!options)}><NavLink exact to="./About" data-after='About' >About</NavLink></li>
                    <li onClick={() => setoptions(!options)}><NavLink exact to="./Skills" data-after='Skills' >Skills</NavLink></li>
                    <li onClick={() => setoptions(!options)}><NavLink exact to="./Projects" data-after='Projects' >Projects</NavLink></li>
                    <li onClick={() => setoptions(!options)}><NavLink exact to="./Poems" data-after='Poem' >Poem</NavLink></li>
                    <li onClick={() => setoptions(!options)}><NavLink exact to="./Contact" data-after='Contact' >Contact</NavLink></li>
                </ul>
            </div>
        </div>
    )
}
