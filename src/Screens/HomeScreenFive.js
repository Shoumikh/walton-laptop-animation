import React, { useEffect, useRef, useState } from "react";
import "./HomeScreenFive.css";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  useScrollPosition,
  useScrollXPosition,
  useScrollYPosition,
} from "react-use-scroll-position";

const HomeScreenFive = () => {
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
    Aos.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    if (pageYOffset > animationRef?.current?.offsetTop) {
      setOnScreen(true);
    } else {
      setOnScreen(false);
    }
  }, [pageYOffset]);
  return (
    <div className="homeScreenFive" ref={animationRef}>
      <div className="homeScreenFive__container">
        <div
          className={`homeScreenFive__product ${
            onScreen ? "homeScreenFive__productAnimation" : ""
          }`}
        >
          {" "}
          <div className="homeScreenFive__textContainers">
            <h1 data-aos="slide-left" data-aos-offset="40">
              The Latest Connectivity
            </h1>
            <div
              data-aos="slide-right"
              data-aos-offset="40"
              className="homeScreenFive__text"
            >
              <p>
                The reversible USB-C (Type-C) port makes it easier to connect
                devices. USB 3.1 Gen 1 provides super-fast data transfer
                speeds-making it possible to transfer a 2GB movie to a USB drive
                in under 2 seconds! For maximum convenience and compatibility,
                the EX38 Pro also features to standard USB 3.1 ports and one
                HDMI port.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreenFive;
