import React, { useEffect, useRef, useState } from "react";
import "./HomeScreenOne.css";
import "./images/Sc_One_00199.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useWindowScroll } from "react-use";
import {
  useScrollPosition,
  useScrollXPosition,
  useScrollYPosition,
} from "react-use-scroll-position";

const SecOne = () => {
  const animationRef = useRef(null);
  const pageYOffset = window.pageYOffset;
  const [onScreen, setOnScreen] = useState(false);
  const { x, y } = useScrollPosition();
  const scrollX = useScrollXPosition();
  const scrollY = useScrollYPosition();

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    if (pageYOffset >= 1) {
      setOnScreen(true);
    } else {
      setOnScreen(false);
    }
  }, [pageYOffset]);

  return (
    <div className="secOne">
      <div className="secOne__container">
        <div data-aos="fade-up" className="secOne__textContainer">
          <h1>Explore The World</h1>
          <div className="secOne__text">
            <p>
              Through the use of USB-C™ users get superfast data transfer over
              SuperSpeed USB 5Gbps (USB 3.2 Gen 1). It also includes a total of
              four USBs: one USB 2.0 port and an HDMI port and two Super Speed
              USB 5Gbps Type A ports one of which can be used for offline
              charging.{" "}
            </p>
          </div>
        </div>
        <div
          data-aos="fade-down"
          className={`secOne__product ${
            onScreen ? "secOne__productAnimation" : ""
          }`}
        ></div>
      </div>
    </div>
  );
};

export default SecOne;
