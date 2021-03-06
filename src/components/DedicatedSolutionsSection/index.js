import React, { useState, useEffect } from "react";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import "./style.css";
import iphone_city from "./iphone_city.png";
import iphone_biznes from "./iphone_biznes.png";
import iphone_it from "./iphone_it.png";
import iconIt from "../../images/it-icon.svg";
import iconCity from "../../images/city-icon.svg";
import iconBiznes from "../../images/biznes-icon.svg";
import arrow from "../../images/arrow_dedicated.svg";
import { useTranslation } from "react-i18next";

const DedicatedSolutionsSection = ({ setSectionType }) => {
  const { t } = useTranslation();

  const [state, setState] = useState({
    goToSlide: 1,
    offsetRadius: 10,
    showNavigation: false,
    config: config.slow,
  });

  let slides = [
    {
      key: 1,
      content: (
        <div className="dedicates_solution_item">
          <div>
            <img src={iconCity} alt="icon" />
            <p>{t("for_city")}</p>
          </div>
          <img src={iphone_city} alt="1" style={{ maxHeight: 500 }} />
        </div>
      ),
    },
    {
      key: 2,
      content: (
        <div className="dedicates_solution_item">
          <div>
            <img src={iconBiznes} alt="icon" />
            <p>{t("for_bussines")}</p>
          </div>
          <img src={iphone_biznes} alt="1" style={{ maxHeight: 500 }} />
        </div>
      ),
    },
    {
      key: 3,
      content: (
        <div className="dedicates_solution_item">
          <div>
            <img src={iconIt} alt="icon" />
            <p>{t("for_it")}</p>
          </div>
          <img src={iphone_it} alt="1" style={{ maxHeight: 500 }} />
        </div>
      ),
    },
  ].map((slide, index) => {
    return {
      ...slide,
      onClick: () => {
        setState({ goToSlide: index });
      },
    };
  });

  let xDown = null;
  let yDown = null;

  const getTouches = (evt) => {
    return evt.touches || evt.originalEvent.touches;
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

  const handleNext = () => {
    if (state.goToSlide === 3) {
      setState({ goToSlide: 0 });
    } else {
      setState({ goToSlide: state.goToSlide + 1 });
    }
  };

  const handlePrevious = () => {
    if (state.goToSlide === 0) {
      setState({ goToSlide: 3 });
    } else {
      setState({ goToSlide: state.goToSlide - 1 });
    }
  };

  useEffect(() => {
    setSectionType(state.goToSlide);
  }, [state.goToSlide, setSectionType]);


  return (
    <div className="wrapper_dedicated_solution_section">
      <div className="wrapper_dedicated_solution_section__header">
        {t("solutions_dedicated")}
      </div>
      <div className="wrapper_dedicated_solution_section__carousel">
        <Carousel
          slides={slides}
          goToSlide={state.goToSlide}
          offsetRadius={state.offsetRadius}
          showNavigation={state.showNavigation}
          animationConfig={state.config}
        />
        <div className="arrow_carousel">
          <div className="arrow_box">
            <img src={arrow} alt="arrow" onClick={handleNext} />
          </div>
          <div className="arrow_box">
            <img
              src={arrow}
              alt="arrow"
              className="arrow_rotate"
              onClick={handlePrevious}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DedicatedSolutionsSection;
