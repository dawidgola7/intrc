import React from 'react'
import DedicatedSection from '../DedicatedSection'
import iconIT from './icon.svg'
import imageBackground1 from './image1.png'


const SectionForIt = () => {
    return (
        <>
            <DedicatedSection  
                title='dla IT' 
                backgroundImage={imageBackground1} 
                iconText={iconIT}
                description='Platforma inTrack w trybie ciągłym i natychmiastowym klasyﬁkuje i przypisuje wszystkie zdarzenia do określonych komponentów środowiska IT.'
            />
            <DedicatedSection  
                title='dla IT'
                backgroundImage={imageBackground1} 
                iconText={iconIT}
                description='Dzięki temu użytkownik dysponuje pełną wiedzą, zarówno historyczną, jak i konﬁguracyjną czy ﬁnansową, o każdym zasobie czy procesie.'
            />
            <DedicatedSection  
                title='dla IT'
                backgroundImage={imageBackground1} 
                iconText={iconIT}
                description='Dane przedstawiane są w formie starannej i zrozumiałej wizualizacji, dostosowanej do kontekstu działania i potrzeb odbiorcy.'
            />
            <DedicatedSection  
                title='dla IT'
                backgroundImage={imageBackground1} 
                iconText={iconIT}
                description='Dane przedstawiane są w formie starannej i zrozumiałej wizualizacji, dostosowanej do kontekstu działania i potrzeb odbiorcy.'
            />
        </>
    )
}

export default SectionForIt;