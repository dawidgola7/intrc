import React from 'react'
import DedicatedSection from '../DedicatedSection'
import imageBackground1 from './image1.png'
import iconBiznes from './icon.svg';


const SectionForBiznes = () => {
    return (
        <>
            <DedicatedSection 
                colorSection='#253140' 
                title='dla Biznesu' 
                backgroundImage={imageBackground1} 
                iconText={iconBiznes}
                description='Automatyzacja procesów biznesowych zasadniczo zwiększa prędkość działania ﬁrm.'
            />
            <DedicatedSection 
                colorSection='#253140' 
                title='dla Biznesu'
                backgroundImage={imageBackground1} 
                iconText={iconBiznes}
                description='Banki są w stanie w kilkadziesiąt sekund od momentu złożenia wniosku zweryﬁkować zdolność kredytową, historie pożyczek i zachowania konsumenckie osób starających się o kredyt.'
            />
            <DedicatedSection 
                colorSection='#253140' 
                title='dla Biznesu'
                backgroundImage={imageBackground1} 
                iconText={iconBiznes}
                description='Banki są w stanie w kilkadziesiąt sekund od momentu złożenia wniosku zweryﬁkować zdolność kredytową, historie pożyczek i zachowania konsumenckie osób starających się o kredyt.'
            />
        </>
    )
}

export default SectionForBiznes;