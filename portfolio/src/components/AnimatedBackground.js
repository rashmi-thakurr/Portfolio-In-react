import React from 'react'
import AnimatedBgDiv from './AnimatedBgDiv'

export default function AnimatedBackground(props) {
    return (
        <div className='background' style={{height:props.height},{background:props.background},{zIndex:props.z}}>
            <div className='box'>
                <AnimatedBgDiv borderRadius={props.borderRadius} divcolor={props.divcolor}/>
                <AnimatedBgDiv borderRadius={props.borderRadius} divcolor={props.divcolor}/>
                <AnimatedBgDiv borderRadius={props.borderRadius} divcolor={props.divcolor}/>
                <AnimatedBgDiv borderRadius={props.borderRadius} divcolor={props.divcolor}/>
                <AnimatedBgDiv borderRadius={props.borderRadius} divcolor={props.divcolor}/>
                <AnimatedBgDiv borderRadius={props.borderRadius} divcolor={props.divcolor}/>
                <AnimatedBgDiv borderRadius={props.borderRadius} divcolor={props.divcolor}/>
                <AnimatedBgDiv borderRadius={props.borderRadius} divcolor={props.divcolor}/>
                <AnimatedBgDiv borderRadius={props.borderRadius} divcolor={props.divcolor}/>
            </div>
               
        </div>
    )
}
