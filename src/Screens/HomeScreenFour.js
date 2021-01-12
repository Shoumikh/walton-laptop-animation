import React, { useEffect, useRef, useState } from "react";
import "./HomeScreenFour.css";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  useScrollPosition,
  useScrollXPosition,
  useScrollYPosition,
} from "react-use-scroll-position";

const HomeScreenFour = () => {
  const animationRef = useRef(null);

  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  const pageYOffset = window.pageYOffset;
  const [onScreen, setOnScreen] = useState(false);
  const { x, y } = useScrollPosition();
  const scrollX = useScrollXPosition();
  const scrollY = useScrollYPosition();

  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  useEffect(() => {
    if (pageYOffset > animationRef?.current?.offsetTop) {
      setOnScreen(true);
    } else {
      setOnScreen(false);
    }
  }, [pageYOffset]);
  return (
    <div className="homeScreenFour" ref={animationRef}>
      <div className="homeScreenFour__container">
        <div
          className={`homeScreenFour__product ${
            onScreen ? "homeScreenFour__productAnimation" : ""
          }`}
        >
          {" "}
          <div className="homeScreenFour__textOuterContainer">
            <div
              data-aos="flip-right"
              data-aos-offset="550"
              className="homeScreenFour__textContainers"
            >
              <h1>Experience Crystal Clear Display</h1>
              <div className="homeScreenFour__text">
                <p>
                  Tamarind EX10 Pro series is equipped with IPS Matte LCD
                  display which gives glossy and plane view with a vibrant color
                  from all viewing angels. Enjoy your favorite movies & videos
                  in the 14" display with immense pleasure. IPS Matte display
                  makes Temarind ultimeate substitute for work and watching
                  movies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreenFour;
