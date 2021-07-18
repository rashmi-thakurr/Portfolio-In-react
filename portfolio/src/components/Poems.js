import React, { useState } from 'react'
import '../styles.css'
import PoemMenu from './PoemMenu'
import { NavLink } from 'react-router-dom';
import Navbar2 from './Navbar2';
import Tilt from 'react-vanilla-tilt'

export default function Poems() {
    const [items, getItems] = useState(PoemMenu)

    return (<><Navbar2 />
        <div class="about-container poems">
            {
                items.map((elem) => {
                    const { id, title, opening, description } = elem;
                    return (
                        <Tilt style={{ backgroundColor: "transparent" }, { zIndex: "100" }}>
                            <div class="card">

                                <div class="content">
                                    <h2 class="id">{id}</h2>
                                    <h3 class="title">{title}</h3>
                                    <p class="opening">{opening}</p>
                                    <NavLink exact to={`/Poem/${id}`}>Read More</NavLink>
                                </div>

                            </div>
                        </Tilt>

                    )
                })
            }

        </div></>
    )
}
