import React from "react";
import "./HeaderTwo.css";
import tamarindLogo from "./tamarind.png";

function HeaderTwo() {
  return (
    <div className="headerTwo">
      <div className="headerTwo__left">
        <img src={tamarindLogo} alt="" />
      </div>
      <div className="headerTwo__right">
        <p>Overview</p>
        <p className="headerTwo__inline">Tech Specs</p>
        <p className="headerTwo__inline">Picture Gallery</p>
        <p className="headerTwo__inline headerTwo__activeItem">Buy Now</p>
      </div>
    </div>
  );
}

export default HeaderTwo;
