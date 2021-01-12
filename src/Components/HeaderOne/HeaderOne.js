import React from "react";
import logo from "../../Screens/images/logos/walton-logo.png";
import "./HeaderOne.css";

function HeaderOne() {
  return (
    <div className="headerOne">
      <div className="headerOne__container">
        <div className="headerOne__middle">
          <img
            className="headerOne__logo"
            src={logo}
            alt=""
            height="30px"
            width="30px"
          />
          <p>Laptop</p>
          <p>Desktop</p>
          <p className="headerOne__inline">All In One</p>
          <p>Monitor</p>
          <p>Keyboard</p>
          <p>Mouse</p>
          <p>Pendrive</p>
          <p>Headphone</p>
          <p>Accessories</p>
        </div>
      </div>
    </div>
  );
}

export default HeaderOne;
