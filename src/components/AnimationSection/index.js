import React from 'react'
import './style.css';


const AnimationSection = ({ video }) => {
    return (
        <div className='wrapper_animation'>
            <video controls >
                <source src={video} type="video/mp4"/>
            </video>
        </div>
    )
}

export default AnimationSection;