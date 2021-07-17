import React from 'react'
import '../styles.css'
import Navbar2 from './Navbar2'
import Tilt from 'react-vanilla-tilt'

export default function About() {
    return (<> <Navbar2 />
        
        <div className=" about-c">
        <Tilt style={{ backgroundColor: "transparent" }, { zIndex: "100" }}>
            <div className="about">
                <h1>Rashmi Thakur</h1>

                <div className="image"><img src="Images/Portfolio-image.jpg" alt="Photograph-of-me" /></div>
                <p>
                    Hey! I'm Rashmi.<br />
                    <br />
                    I am an undergraduate student at IIT Delhi,majoring in Textile Science and Fibre Engineering.
                    During my stay at IIT Delhi, I have developed a passion for Web-Development and Software Development.
                    <br />
                    <br />
                    In my free time,i try to understand human psychology. Human emotions, people, figuring out why they behave the way they behave interests me.
                    I also love to write poems, whenever i find myself high on emotions. That's my way of handling things which aren't under my control.



                </p>
                <a href="https://www.linkedin.com/in/rashmi-thakur-964295189/" className="btn">Get In Touch</a>
            </div>
            </Tilt>
        </div>
   
       </>
       
      
    )
}
