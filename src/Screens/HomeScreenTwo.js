import React, { useEffect, useRef, useState } from "react";
import "./HomeScreenTwo.css";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  useScrollPosition,
  useScrollXPosition,
  useScrollYPosition,
} from "react-use-scroll-position";

const HomeScreenTwo = () => {
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
    if (pageYOffset > animationRef?.current?.offsetTop) {
      setOnScreen(true);
    } else {
      setOnScreen(false);
    }
  }, [pageYOffset]);

  return (
    <div className="homeScreenTwo" ref={animationRef}>
      <div className="homeScreenTwo__container">
        <div
          className={`homeScreenTwo__product ${
            onScreen ? "homeScreenTwo__productAnimation" : ""
          }`}
        >
          {" "}
          <div
            data-aos="fade-down"
            data-aos-offset="40"
            className="homeScreenTwo__textContainers"
          >
            <h1>Elegant Metalic Finish</h1>
            <div className="homeScreenTwo__text">
              <p>
                Tamarind EX10 Pro series has a sleek metalic design that will
                give you premium feel. It is crafted to provided all the
                computing essentials with a metalic finish. The lightweight
                desigh of Tamarind ensures you to carry it anywhere with great
                comfort.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreenTwo;
