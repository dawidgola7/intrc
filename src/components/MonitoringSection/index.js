import React from 'react'
import image from './device.png'
import line1 from './line_1.png'
import line2 from './line_2.png'
import line3 from './line_3.png'
import line4 from './line_4.png'
import line1_mobile from './mobile_line_1.png';
import line2_mobile from './mobile_line_2.png';
import line3_mobile from './mobile_line_3.png';
import line4_mobile from './mobile_line_4.png';
import './style.css';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next'

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

const MonitoringSection = () => {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    const { t } = useTranslation();

    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isMobile = windowDimensions &&  windowDimensions.width < 1025;


    const mobileView = () => {
        return (
            <div className='monitoring_section'>
            <div className='monitoring_section__wrapper'>
                <div className='monitoring_section__1_m'>
                    <div className='monitoring_section__1_text_m'>
                        <span>{t('monitoring_desc_1')}</span>
                    </div>
                    <img src={line2_mobile} alt='line'/>
                </div>
                <div className='monitoring_section__2_m'>
                    <div className='monitoring_section__2_text_m'>
                        <span>{t('monitoring_desc_2')}</span>
                    </div>
                    <img src={line1_mobile} alt='line'/>
                </div>
                <img src={image} alt='device' className='monitoring_section__image'/>
                <div className='monitoring_section__3_m'>
                    <img src={line3_mobile} alt='line'/>
                    <div className='monitoring_section__3_text_m'>
                        <span>{t('monitoring_desc_3')}</span>
                    </div>
                </div>
                <div className='monitoring_section__4_m'>
                    <img src={line4_mobile} alt='line'/>
                    <div className='monitoring_section__4_text_m'>
                        <span>{t('monitoring_desc_4')}</span> 
                    </div>
                </div>
            </div>
        </div>      
        )
    }

    

    return (
        <>
        {isMobile ? mobileView() : (
        <div className='monitoring_section'>
            <div className='monitoring_section__wrapper'>
                <div className='monitoring_section__1'>
                    <img src={line4} alt='line'/>
                    <div className='monitoring_section__1_text'>
                        <span>{t('monitoring_desc_1')}</span>
                    </div>
                </div>
                <div className='monitoring_section__2'>
                    <div className='monitoring_section__2_text'>
                        <span>{t('monitoring_desc_2')}</span>
                    </div>
                    <img src={line1} alt='line'/>
                </div>
                <img src={image} alt='device' className='monitoring_section__image'/>
                <div className='monitoring_section__3'>
                    <div className='monitoring_section__3_text'>
                        <span>{t('monitoring_desc_3')}</span>
                    </div>
                    <img src={line2} alt='line'/>
                </div>
                <div className='monitoring_section__4'>
                    <img src={line3} alt='line'/>
                    <div className='monitoring_section__4_text'>
                        <span>{t('monitoring_desc_4')}</span> 
                    </div>
                </div>
            </div>
        </div>
        )}
        </>
    )
}

export default MonitoringSection;