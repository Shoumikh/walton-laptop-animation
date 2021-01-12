import React, { useEffect, useRef, useState } from "react";
import "./HomeScreenThree.css";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  useScrollPosition,
  useScrollXPosition,
  useScrollYPosition,
} from "react-use-scroll-position";
import processorImg from "./images/logos/processor.png";

const HomeScreenThree = () => {
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
    if (pageYOffset > animationRef?.current?.offsetTop - 100) {
      setOnScreen(true);
    } else {
      setOnScreen(false);
    }
  }, [pageYOffset]);

  return (
    <div className="homeScreenThree" ref={animationRef}>
      <div className="homeScreenThree__container">
        <div
          className={`homeScreenThree__product ${
            onScreen ? "homeScreenThree__productAnimation" : ""
          }`}
        >
          <div
            data-aos="zoom-in-up"
            data-aos-easing="ease-in-cubic"
            data-aos-offset="750"
            className="homeScreenThree__textContainers delay"
          >
            <h1>Processor</h1>
            <div className="homeScreenThree__text">
              <p>
                Tamarind EX10 Pro series is powered by 10TH genaration intel
                Processor that can respond & perform at an amazing speed.
                Whether you are doing any graphical works or using multiple
                applicatiions, it tackles them all at an ease. This device can
                rise above the challenges by given all the multitasking
                performance that the user needs for work or play.
              </p>
            </div>
          </div>
          <div className="homeScreenThree__configContainer">
            <div className="homeScreenThree__config">
              <img src={processorImg} alt="" />
              <div className="homeScreenThree__configText">
                <h4 className="homeScreenThree__configTitle">
                  Intel® Core™ i3-1005G1 Processor{" "}
                </h4>
                <p className="homeScreenThree__configInfo">
                  (10nm 1.2GHz, DDR4 3200MHz, 4MB Smart Cache)
                </p>
              </div>
            </div>
            <div className="homeScreenThree__config">
              <img src={processorImg} alt="" />
              <div className="homeScreenThree__configText">
                <h4 className="homeScreenThree__configTitle">
                  Intel® Core™ i5-1035G1 Processor{" "}
                </h4>
                <p className="homeScreenThree__configInfo">
                  (10nm 1.0GHz, DDR4 3200MHz, 6MB Smart Cache)
                </p>
              </div>
            </div>
            <div className="homeScreenThree__config">
              <img src={processorImg} alt="" />
              <div className="homeScreenThree__configText">
                <h4 className="homeScreenThree__configTitle">
                  Intel® Core™ i7-1065G1 Processor{" "}
                </h4>
                <p className="homeScreenThree__configInfo">
                  (10nm 1.3GHz, DDR4 3200MHz, 8MB Smart Cache)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreenThree;
