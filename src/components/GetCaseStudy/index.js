import React from 'react'
import './style.css';
import background from './background.svg';

const GetCaseStudy = () => {
    return (
        <div className="wrapper_getcasestudy">
            <div className="wrapper_getcasestudy__header">Otrzymaj darmowe Case Study z wdrożenia inTrack</div>
            <img src={background}  className="wrapper_getcasestudy__image" alt="background"/>
            <div>
                podaj swoje dane na ktore wyslemy case study
            </div>
        </div>
    )
}

export default GetCaseStudy;