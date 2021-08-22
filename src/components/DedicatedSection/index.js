import React from 'react';
import { useTranslation } from 'react-i18next';
import stream from '../../images/stream3.svg';
import stream2 from '../../images/stream4.svg';
import './style.css';

const DedicatedSection = ({ backgroundImage, colorSection, title, description, iconText}) => {
    const { t } = useTranslation();
    return (
        <div className="wrapper_dedicatedsection" style={{ backgroundColor: colorSection}}>
            <img src={ colorSection ? stream2 : stream} alt='stream' className='stream_dedicated'/>
            <div className="wrapper_dedicatedsection__box">
                <img src={backgroundImage} alt='img' className='image_dedicated'/>
            </div>
            <div className='wrapper_dedicatedsection__information' style={{color: colorSection ? '#fff' :'#253140'}}>
                <img src={iconText} alt='icon' className='wrapper_dedicatedsection__information--icon'/>
                <div className='wrapper_dedicatedsection__information--header'><span>inTrack</span> <span>{t(title)}</span></div>
                <div className='wrapper_dedicatedsection__information--description'>{t(description)}</div>
            </div>
        </div>
    )
}

export default DedicatedSection;