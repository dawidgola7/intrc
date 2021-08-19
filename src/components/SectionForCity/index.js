import React from 'react'
import DedicatedSection from '../DedicatedSection'
import iconCity from './icon.svg';
import imageBackground1 from './image1.png';


const SectionForCity = () => {
    return (
        <>
            <DedicatedSection 
                colorSection='#253140' 
                title='dla Miast'
                backgroundImage={imageBackground1} 
                iconText={iconCity}
                description='Zarządzanie miastem to koordynacja działań wielu służb i instytucji, monitorowana w centrach zarządzania za pomocą systemów łączności, czujników i kamer.'
            />
            <DedicatedSection 
                colorSection='#253140' 
                title='dla Miast'
                backgroundImage={imageBackground1} 
                iconText={iconCity}
                description='inTrack umożliwia włączenie w ten proces informacji od mieszkańców, co może znacząco wpłynąć na szybkość i skuteczność likwidowania usterek i problemów.'
            />
            <DedicatedSection 
                colorSection='#253140' 
                title='dla Miast'
                backgroundImage={imageBackground1} 
                iconText={iconCity}
                description='Zdarzenia i ich skutki są zaznaczone w cyfrowym modelu miasta i przedstawione na mapach z warstwami infrastruktury. Geograﬁczna koncentracja zdarzeń i liczba zgłaszających osób służą jako kryterium pilności działania.'
            />
        </>
    )
}

export default SectionForCity;