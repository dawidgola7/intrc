import React from 'react'
import Header from '../Header'
import imageSection from '../../images/phones.png'
import arrow from '../../images/arrow.svg'
import './style.css';
import Button from '../Button';


const MainSection = () => {


    const handleClick = () => {
        const element = document.querySelector(".section_information");
        element.scrollIntoView({ behavior: "smooth"});
    }

    return (
        <div className='main_section'>
            <Header/>
            <div>
                <img src={imageSection} alt='phones' className='phones'/>
                <p className='main_section__text'>Od teraz masz wszystko pod kontrolą</p>
                <img src={arrow} alt='arrow' className='arrow' onClick={handleClick}/>
            </div>
            <div className='main_section_button'>
                <Button>Wypróbuj demo</Button>
            </div>
        </div>
    )
}

export default MainSection;