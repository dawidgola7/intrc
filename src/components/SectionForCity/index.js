import React from 'react'
import DedicatedSection from '../DedicatedSection'
import iconCity from './icon.svg';
import imageBackground1 from './image1.png';
import imageBackground2 from './image2.png';
import imageBackground3 from './image3.png';


const SectionForCity = () => {
    return (
        <div style={{transition: "all .2s ease-in-out"}}>
            <DedicatedSection 
                colorSection='#253140' 
                title='for_city'
                backgroundImage={imageBackground1} 
                iconText={iconCity}
                description='city_desc_1'
            />
            <DedicatedSection 
                colorSection='#253140' 
                title='for_city'
                backgroundImage={imageBackground2} 
                iconText={iconCity}
                description='city_desc_2'
            />
            <DedicatedSection 
                colorSection='#253140' 
                title='for_city'
                backgroundImage={imageBackground3} 
                iconText={iconCity}
                description='city_desc_3'
            />
        </div>
    )
}

export default SectionForCity;