import React from "react";
import "./styles.scss";
import logo from "assets/img/logo.png";

const Logo = () => {
  return (
    <div className="logo">
      <img src={logo} alt="logo" />
    </div>
  );
};

export default Logo;
