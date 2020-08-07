import React, { useState } from "react";
import Logo from "components/Logo";
import NavBar from "components/NavBar";
import BurgerButton from "components/BurgerButton";
import "./styles.scss";

const HeaderMain = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <div className="header-main">
      <Logo />
      <NavBar openMenu={openMenu} handleOpenMenu={handleOpenMenu} />
      <BurgerButton openMenu={openMenu} handleOpenMenu={handleOpenMenu} />
    </div>
  );
};

export default HeaderMain;
