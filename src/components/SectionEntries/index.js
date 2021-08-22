import React from 'react'
import { useTranslation } from 'react-i18next';
import image from '../../images/image_section_entries.png';
import stream from '../../images/stream2.svg';
import './style.css';

const SectionEntries = () => {
    const { t } = useTranslation();
    return (
        <div className="section_entries">
            <img src={stream} alt='stream' className='stream'/>
            <div className='section_information'>
                <div className='text_top'>
                    <div className='text_top__words'>
                        <div>{t('section_entries_text1')}</div> 
                        <div>{t('section_entries_text1_2')}</div>
                    </div>
                </div>
                <img src={image} alt='image_section_entries' className='image'/>
                <div className='text_bottom'>
                    <div className='text_bottom__words'>
                        <div className='text_bottom_big'>{t('section_entries_text2')}</div>
                        <div className='text_bottom_small'>{t('section_entries_text2_2')}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionEntries;