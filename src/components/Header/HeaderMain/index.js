import React from "react";
import Logo from "../../Logo";
import NavBar from "../../NavBar";
import BurgerButton from "../../BurgerButton";
import "./styles.scss";

const HeaderMain = () => {
  return (
    <div className="header-main">
      <Logo />
      <NavBar />
      <BurgerButton />
    </div>
  );
};

export default HeaderMain;
