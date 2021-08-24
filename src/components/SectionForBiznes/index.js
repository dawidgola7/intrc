import React from 'react'
import DedicatedSection from '../DedicatedSection'
import imageBackground1 from './image1.png'
import imageBackground2 from './image2.png'
import imageBackground3 from './image2.png'
import iconBiznes from './icon.svg';


const SectionForBiznes = () => {
    return (
        <div style={{transition: "all .2s ease-in-out"}}>
            <DedicatedSection 
                colorSection='#253140' 
                title='for_bussines' 
                backgroundImage={imageBackground1} 
                iconText={iconBiznes}
                description='biznes_desc_1'
            />
            <DedicatedSection 
                colorSection='#253140' 
                title='for_bussines'
                backgroundImage={imageBackground2} 
                iconText={iconBiznes}
                description='biznes_desc_2'
            />
            <DedicatedSection 
                colorSection='#253140' 
                title='for_bussines'
                backgroundImage={imageBackground3} 
                iconText={iconBiznes}
                description='biznes_desc_3'
            />
        </div>
    )
}

export default SectionForBiznes;