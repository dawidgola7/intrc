import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import './style.css';


const AnimationSection = ({ video, videoEn  }) => {
    const { i18n } = useTranslation();


    return (
        <div className='wrapper_animation'>
            {i18n.language === 'pl' ? (
                <video controls >
                    <source src={video} type="video/mp4"/>
                </video>
            ) : (
                <video controls >
                    <source src={videoEn} type="video/mp4"/>
                </video>
            )}
        </div>
    )
}

export default AnimationSection;