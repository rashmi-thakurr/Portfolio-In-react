import React from 'react'
import '../styles.css'
import Navbar2 from './Navbar2'
import AnimatedBackground from './AnimatedBackground'

export default function Projects() {
    return (
        <><Navbar2 z="10000" />
            <AnimatedBackground />
            <div className=' projects' >

                <div className="note" >
                    <h2>Click On the Image to view the corresponding Project</h2>
                </div>
                <div className="box">
                    <span className='p-1'><a href="https://rashmi-thakurr.github.io/Download-Images/"><img src="Images/image-downloader.jpg" /></a></span>
                    <span className='p-2'><a href="https://rashmi-thakurr.github.io/Music-Player/"><img src="Images/music-player.png" /></a></span>
                    <span className='p-3'><a href="https://rashmi-thakurr.github.io/Music-Player/"><img src="Images/video-player.png" /></a></span>
                    <span className='p-4' ><a href="https://rashmi-thakurr.github.io/Number-Game/"><img src="Images/Number-Game.jpg" /></a></span>
                    <span className='p-5'><a href="https://rashmi-thakurr.github.io/TwitterClone/"><img src="Images/twitter.png" /></a></span>
                    <span className='p-6'><a href="https://rashmi-thakurr.github.io/Virtual%20Piano/index.html"><img src="Images/piano.jpg" /></a></span>
                </div>
            </div>
        </>
    )
}
