import React from "react";
import { Link } from "react-scroll";
import "./styles.scss";

const NavBar = ({ openMenu, handleOpenMenu }) => {
  return (
    <nav className={`nav-bar ${openMenu ? "open" : ""}`}>
      <ul className="nav-bar-menu">
        <li>
          <Link to="portfolio" smooth={true} onClick={handleOpenMenu}>
            portfolio
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} onClick={handleOpenMenu}>
            about
          </Link>
        </li>
        <li>
          <Link to="resume" smooth={true} onClick={handleOpenMenu}>
            resume
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} onClick={handleOpenMenu}>
            contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
