import React from "react";
import Logo from "components/Logo";
import NavBar from "components/NavBar";
import BurgerButton from "components/BurgerButton";
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
