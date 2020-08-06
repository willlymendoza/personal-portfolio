import React from "react";
import HeaderMain from "./HeaderMain";
import HeaderBanner from "./HeaderBanner";
import "./styles.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <HeaderMain />
        <HeaderBanner />
      </div>
    </header>
  );
};

export default Header;
