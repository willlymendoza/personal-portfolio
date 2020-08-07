import React from "react";
import "./styles.scss";

const BurgerButton = ({ openMenu, handleOpenMenu }) => {
  return (
    <div className="menu-btn" onClick={handleOpenMenu}>
      <span className={`menu-btn-burger ${openMenu ? "open" : ""}`}></span>
    </div>
  );
};

export default BurgerButton;
