import React, { useState, useEffect } from "react";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import { useTranslation } from "react-i18next";
import image from './image_here.png'
import left_quote from './left_quote.png';
import right_quote from './right_quote.png';
import './style.css';

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus vel lobortis tincidunt fames quisque mauris at diam. Nullam morbi ipsum turpis amet id posuere torto quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.'

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
          key: 0,
          content: (
            <div className="opinion_carousel__item">
                <img src={image} alt="1" style={{ maxHeight: 200 }} />
                <div className="opinion_carousel__item--desc">
                    <div className="opinion_carousel__item--desc--name">Marek Domzal</div>
                    <div className="opinion_carousel__item--desc--company">Mufu studio</div>
                </div>
            </div>
          ),
          text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        },
        {
          key: 1,
          content: (
            <div className="opinion_carousel__item">
              <img src={image} alt="1" style={{ maxHeight: 200 }} />
              <div className="opinion_carousel__item--desc">
                    <div className="opinion_carousel__item--desc--name">Marek Domzal</div>
                    <div className="opinion_carousel__item--desc--company">Mufu studio</div>
                </div>
            </div>
          ),
          text:'Risus vel lobortis tincidunt fames quisque mauris at diam. Nullam morbi ipsum turpis amet id posuere torto quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
          key: 2,
          content: (
            <div className="opinion_carousel__item">
              <img src={image} alt="1" style={{ maxHeight: 200 }} />
              <div className="opinion_carousel__item--desc">
                    <div className="opinion_carousel__item--desc--name">Marek Domzal</div>
                    <div className="opinion_carousel__item--desc--company">Mufu studio</div>
                </div>
            </div>
          ),
          text:'Risus vel lobortis tincidunt fames quisque mauris at diam. Nullam morbi ipsum turpis amet id posuere '
        },{
        key: 3,
        content: (
          <div className="opinion_carousel__item">
            <img src={image} alt="1" style={{ maxHeight: 200 }} />
            <div className="opinion_carousel__item--desc">
                    <div className="opinion_carousel__item--desc--name">Marek Domzalxx</div>
                    <div className="opinion_carousel__item--desc--company">Mufu studio</div>
                </div>
          </div>
        ),
        text:'Nothing'
      },
      {
        key: 4,
        content: (
          <div className="opinion_carousel__item">
            <img src={image} alt="1" style={{ maxHeight: 200 }} />
            <div className="opinion_carousel__item--desc">
                    <div className="opinion_carousel__item--desc--name">Marek Domzal</div>
                    <div className="opinion_carousel__item--desc--company">Mufu studio</div>
                </div>
          </div>
        ),
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus vel lobortis tincidunt fames quisque mauris at diam. Nullam morbi ipsum turpis amet id posuere torto quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.'
      }
      ].map((slide, index) => {
        return {
          ...slide,
          onClick: () => {
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
            <div className="wrapper_opinion__header">{t('opinion_header')}</div>
            <div className='wrapper_opinion_carousel--desc'>
                <img src={left_quote} alt='left_quote' className="left_quote"/>
                <div className='wrapper_opinion_carousel--desc--text'>{slides[state.goToSlide].text}</div>
                <img src={right_quote} alt='right_quote' className="right_quote"/>
            </div>
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



