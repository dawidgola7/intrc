import React from 'react'
import Header from '../Header'
import imageSection from '../../images/phones.png'
import arrow from '../../images/arrow.svg'
import './style.css';
import Button from '../Button';
import { useTranslation } from 'react-i18next';


const MainSection = ({ handleSetShowForm }) => {

    const { t } = useTranslation();
    const handleClick = () => {
        const element = document.querySelector(".section_information");
        element.scrollIntoView({ behavior: "smooth"});
    }

    return (
        <div className='main_section'>
            <Header handleSetShowForm={handleSetShowForm}/>
            <div>
                <img src={imageSection} alt='phones' className='phones'/>
                <p className='main_section__text'>{t('main_section_text')}</p>
                <img src={arrow} alt='arrow' className='arrow' onClick={handleClick}/>
            </div>
            <div className='main_section_button'>
                <Button onClick={handleSetShowForm}>{t('try_the_demo')}</Button>
            </div>
        </div>
    )
}

export default MainSection;