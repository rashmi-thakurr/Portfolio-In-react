import React from 'react';
import AnimatedBackground from './AnimatedBackground';
import '../styles.css';
export default function HomeContent() {
    return (
        <>
        
            <div className="main-container">
                <div className="main">
                <AnimatedBackground background="transparent" z="6" borderRadius="100%"/>
                    <h1>Welcome</h1>
                    <div className="wrapper">
                         <div className="static-txt">
                            <h3>I'm a</h3>
                        </div>
                       <ul className="dynamic-txt">
                            <li><span>Learner</span></li>
                            <li><span>Developer</span></li>
                            <li><span>Psychophile</span></li>
                            <li><span>Poet</span></li>
                        </ul>
                    </div>


                </div>
                <div className="shadow one"></div>
                <div className="shadow two"></div>
            </div>

          </> 
      
    )
}
