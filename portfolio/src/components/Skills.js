import React, { useState } from 'react'
import SkillData from './SkillData'
import '../styles.css'
import AnimatedBackground from './AnimatedBackground';
import Navbar2 from './Navbar2';

export default function Skills() {
    const [skill, setskill] = useState(SkillData);
    return (
        <>
        <AnimatedBackground height="120vh" background="linear-gradient(90deg,#320d3e 0%, #7e1544 35%,#4d5198 100%)"/>
        <Navbar2/>
        <div className=" skills">
           
            {
                skill.map((e) => {
                    const { id, name, percent } = e;
                   var i = percent;

                    return ( 
                    <div className="card">
                        <div className="box">
                            <div className="percent">
                                <svg>
                                    <circle  cx="70" cy="70" r="70"></circle>
                                    <circle style={{strokeDashoffset:440 - 440*i/100}} cx="70" cy="70" r="70"></circle>
                                </svg>
                                <div className="number">
                                    <h2>{percent}<span>%</span></h2>
                                </div>
                            </div>
                            <h2 className="text">{name}</h2>
                        </div>
                    </div>)
                })
            }
        </div>
       
        </>
    )
}
