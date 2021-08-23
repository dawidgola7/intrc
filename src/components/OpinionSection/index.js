import React, { useState, useEffect } from "react";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import { useTranslation } from "react-i18next";
import image from './image_here.png'
import './style.css';

const text = 'x'

const OpinionSection = () => {

    const { t } = useTranslation();

    const [state, setState] = useState({
        goToSlide: 1,
        offsetRadius: 10,
        showNavigation: false,
        config: config.slow
      });
    
      let slides = [
        {
          key: 1,
          content: (
            <div className="opinion_carousel__item">
                <div className="opinion_carousel__item--text">{text}</div>
                <img src={image} alt="1" style={{ maxHeight: 500 }} />
                <div className="opinion_carousel__item--desc">
                    <div className="opinion_carousel__item--desc--name">Marek Domzal</div>
                    <div className="opinion_carousel__item--desc--company">Mufu studio</div>
                </div>
            </div>
          )
        },
        {
          key: 2,
          content: (
            <div className="opinion_carousel__item">
                <div className="opinion_carousel__item--text">{text}</div>
              <img src={image} alt="1" style={{ maxHeight: 500 }} />
              <div className="opinion_carousel__item--desc">
                    <div className="opinion_carousel__item--desc--name">Marek Domzal</div>
                    <div className="opinion_carousel__item--desc--company">Mufu studio</div>
                </div>
            </div>
          )
        },
        {
          key: 3,
          content: (
            <div className="opinion_carousel__item">
                <div className="opinion_carousel__item--text">{text}</div>
              <img src={image} alt="1" style={{ maxHeight: 500 }} />
              <div className="opinion_carousel__item--desc">
                    <div className="opinion_carousel__item--desc--name">Marek Domzal</div>
                    <div className="opinion_carousel__item--desc--company">Mufu studio</div>
                </div>
            </div>
          )
        },{
        key: 4,
        content: (
          <div className="opinion_carousel__item">
            <div className="opinion_carousel__item--text">{text}</div>
            <img src={image} alt="1" style={{ maxHeight: 500 }} />
            <div className="opinion_carousel__item--desc">
                    <div className="opinion_carousel__item--desc--name">Marek Domzal</div>
                    <div className="opinion_carousel__item--desc--company">Mufu studio</div>
                </div>
          </div>
        )
      },
      {
        key: 5,
        content: (
          <div className="opinion_carousel__item">
              <div className="opinion_carousel__item--text">{text}</div>
            <img src={image} alt="1" style={{ maxHeight: 500 }} />
            <div className="opinion_carousel__item--desc">
                    <div className="opinion_carousel__item--desc--name">Marek Domzal</div>
                    <div className="opinion_carousel__item--desc--company">Mufu studio</div>
                </div>
          </div>
        )
      }
      ].map((slide, index) => {
        return {
          ...slide,
          onClick: () => {
            console.log('klik ???')
            setState({ goToSlide: index });
          }
        };
      });
    
      let xDown = null;
      let yDown = null;
    
      const getTouches = (evt) => {
        return (
          evt.touches || evt.originalEvent.touches 
        ); 
      };
    
      const handleTouchStart = (evt) => {
        const firstTouch = getTouches(evt)[0];
        xDown = firstTouch.clientX;
        yDown = firstTouch.clientY;
      };
    
      const handleTouchMove = (evt) => {
        if (!xDown || !yDown) {
          return;
        }
    
        let xUp = evt.touches[0].clientX;
        let yUp = evt.touches[0].clientY;
    
        let xDiff = xDown - xUp;
        let yDiff = yDown - yUp;
    
        if (Math.abs(xDiff) > Math.abs(yDiff)) {
          if (xDiff > 0) {
            setState({ goToSlide: state.goToSlide + 1 });
          } else {
            setState({ goToSlide: state.goToSlide - 1 });
          }
        }
    
        xDown = null;
        yDown = null;
      };
    

    return (
        <div className="wrapper_opinion">
            <div className="wrapper_opinion__header">Poznaj opinie użytkowników inTrack</div>
            <div className='wrapper_opinion_carousel'>
                <Carousel
                    slides={slides}
                    goToSlide={state.goToSlide}
                    offsetRadius={state.offsetRadius}
                    showNavigation={state.showNavigation}
                    animationConfig={state.config}
                    
                />
            </div>
        </div>
    )
}

export default OpinionSection;



