import React from "react";
import "./styles.scss";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <ul className="nav-bar-menu">
        <li>
          <a href="#about">about</a>
        </li>
        <li>
          <a href="#portfolio">portfolio</a>
        </li>
        <li>
          <a href="#contact">contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
