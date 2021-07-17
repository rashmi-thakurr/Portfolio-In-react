import React from 'react'
import '../styles.css'
import Navbar2 from './Navbar2';
import Menu from './Menu';
import AnimatedBackground from './AnimatedBackground'

export default function Contact() {
    return (
        <> 
        <AnimatedBackground/>
        <Navbar2 />
        <Menu/>
            <div className='contact'> 
                    <div className="img left">
                        <img src="Images/phone.svg"/>
                    </div>
                   <div className='options'>
                       <div className="address option">
                            <img src="Images/directions.svg"/>
                            <h3>Address : Kailash Hostel, IIT Delhi</h3>
                       </div>
                       <div className="mail option">
                            <img src="Images/mail.svg"/>
                            <h3>Email : rashmi.lata151@gmail.com</h3>
                        </div>
                        <div className="message option">
                            <img src="Images/letter.svg"/>
                            <h3>Phone : 9680483380</h3>
                        </div>
                   </div>
            </div>
        </>
    )
}
