import React from "react";
import HeaderMain from "./HeaderMain";
import HeaderBanner from "./HeaderBanner";
import "./styles.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <HeaderMain />
        <HeaderBanner />
      </div>
    </div>
  );
};

export default Header;
