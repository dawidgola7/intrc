import React from 'react'
import image from '../../images/image_section_entries.png';
import stream from '../../images/stream2.svg';
import './style.css';

const SectionEntries = () => {
    return (
        <div className="section_entries">
            <img src={stream} alt='stream' className='stream'/>
            <div className='section_information'>
                <div className='text_top'>
                    <div className='text_top__words'>
                        <div>Odkryj inTrack</div> 
                        <div>aby lepiej zarządzać procesami</div>
                    </div>
                </div>
                <img src={image} alt='image_section_entries' className='image'/>
                <div className='text_bottom'>
                    <div className='text_bottom__words'>
                        <div className='text_bottom_big'>Biznesowa rzeczywistość pod kontrolą</div>
                        <div className='text_bottom_small'>Zbieranie i analiza informacji to podstawa procesu decyzyjnego</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionEntries;