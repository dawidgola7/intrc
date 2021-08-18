import React from 'react';
import stream from '../../images/stream3.svg';
import stream2 from '../../images/stream4.svg';
import icon from '../../images/icon.svg';
import image1 from '../../images/image1.png';
import './style.css';

const DedicatedSection = ({backgroundImage,colorSection,title,description}) => {

    return (
        <div className="wrapper_dedicatedsection" style={{ backgroundColor: colorSection}}>
            <img src={ colorSection ? stream2 : stream} alt='stream' className='stream_dedicated'/>
            <div className="wrapper_dedicatedsection__box">
                <img src={image1} alt='img' className='image_dedicated'/>
            </div>
            <div className='wrapper_dedicatedsection__information'>
                <img src={icon} alt='icon' className='wrapper_dedicatedsection__information--icon'/>
                <div className='wrapper_dedicatedsection__information--header'><span>inTrack</span> <span>{title}</span></div>
                <div className='wrapper_dedicatedsection__information--description'>
                    Platforma inTrack w trybie ciągłym i natychmiastowym klasyfikuje i przypisuje
                    wszystkie zdarzenia do określonych komponentów środowiska IT.
                </div>
            </div>
        </div>
    )
}

export default DedicatedSection;