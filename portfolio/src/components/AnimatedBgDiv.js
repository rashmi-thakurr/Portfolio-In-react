import React from 'react'
import '../styles.css'
export default function AnimatedBgDiv(props) {
    return (
        <>
             <div  style={{borderRadius:props.borderRadius},{backgroundColor:props.divcolor}}></div>
        </>
    )
}
