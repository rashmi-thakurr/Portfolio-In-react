import React from 'react'
import '../styles.css'

export default function Navbar({menu,showMenu}) {
   
    return (<>
        <div style={{backgroundColor:"teal"}}>
             <div className="menu" >
                    <h2 className="logo">Rashmi<span> Thakur</span></h2>
                    <div className="hamburger-menu" onClick={()=>showMenu(!menu)}>
                        <div className="bar" ></div>
                    </div>
                </div>
        </div>
</>
    )
}
