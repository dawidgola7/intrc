import React from 'react';
import { useTranslation } from 'react-i18next';
import stream from '../../images/stream3.svg';
import stream2 from '../../images/stream4.svg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import placeholder from './image1.png';
import 'react-lazy-load-image-component/src/effects/blur.css';

import './style.css';


const DedicatedSection = ({ backgroundImage, colorSection, title, description, iconText}) => {
    const { t } = useTranslation();
    return (
        <div className="wrapper_dedicatedsection" style={{ backgroundColor: colorSection}}>
            {backgroundImage && (
                <>
            <img src={ colorSection ? stream2 : stream} alt='stream' className='stream_dedicated'/>
            <div className="wrapper_dedicatedsection__box">
                <div className="wrapper_dedicatedsection__box--image">
                <LazyLoadImage
                 className='image_dedicated'
                 alt={'background'}
                 effect="blur"
                 placeholderSrc={placeholder}
                 src={backgroundImage} 
                 />
                 </div>
            </div>
            <div className='wrapper_dedicatedsection__information' style={{color: colorSection ? '#fff' :'#253140'}}>
                <img src={iconText} alt='icon' className='wrapper_dedicatedsection__information--icon'/>
                <div className='wrapper_dedicatedsection__information--header'><span>inTrack</span> <span>{t(title)}</span></div>
                <div className='wrapper_dedicatedsection__information--description'>{t(description)}</div>
            </div>
            </>
            )}
        </div>
    )
}

export default DedicatedSection;