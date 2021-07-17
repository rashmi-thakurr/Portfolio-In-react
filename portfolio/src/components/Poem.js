import React from 'react'
import '../styles.css'
import PoemMenu from './PoemMenu'
import AnimatedBackground from './AnimatedBackground'
import Navbar2 from './Navbar2'

export default function Poem(props) {
    let getID = props.match.params.id;
    const getData = PoemMenu[getID - 1];
    return (<div className="poemdiv">
    <AnimatedBackground background="transparent" z="6" borderRadius="0%"/>  
    <Navbar2/>
    <div className="poem">
   
        <div className='poemContent'>
            <h1 className="poem-title">{getData.title}</h1>
            <div className="poemDescription">{getData.decription}</div>
        </div>
        <div className="left-img">
            <img src="/Images/poem-page-img.svg" />
        </div>
    </div></div>
    )
}
