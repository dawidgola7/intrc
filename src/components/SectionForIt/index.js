import React from 'react'
import DedicatedSection from '../DedicatedSection'
import iconIT from './icon.svg'
import imageBackground1 from './image1.png'
import imageBackground2 from './image2.png'
import imageBackground3 from './image3.png'
import imageBackground4 from './image4.png'


const SectionForIt = () => {
    return (
        <>
            <DedicatedSection  
                title='for_it' 
                backgroundImage={imageBackground1} 
                iconText={iconIT}
                description='it_desc_1'
            />
            <DedicatedSection  
                title='for_it'
                backgroundImage={imageBackground2} 
                iconText={iconIT}
                description='it_desc_2'
            />
            <DedicatedSection  
                title='for_it'
                backgroundImage={imageBackground3} 
                iconText={iconIT}
                description='it_desc_3'
            />
        </>
    )
}

export default SectionForIt;