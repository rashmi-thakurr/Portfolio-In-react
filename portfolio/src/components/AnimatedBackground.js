import React from 'react'


export default function AnimatedBackground(props) {
    return (
        <div className='background' style={{height:props.height},{background:props.background},{zIndex:props.z}}>
            <div className='box'>
                <div  style={{backgroundColor:props.divcolor}}></div>
                <div  style={{backgroundColor:props.divcolor}}></div>
                <div  style={{backgroundColor:props.divcolor}}></div>
                <div  style={{backgroundColor:props.divcolor}}></div>
                <div  style={{backgroundColor:props.divcolor}}></div>
                <div  style={{backgroundColor:props.divcolor}}></div>
                <div  style={{backgroundColor:props.divcolor}}></div>
                <div  style={{backgroundColor:props.divcolor}}></div>
                <div  style={{backgroundColor:props.divcolor}}></div>
                <div  style={{backgroundColor:props.divcolor}}></div>
            </div>
               
        </div>
    )
}
