import React from "react";
import "./styles.scss";

const HeaderBanner = () => {
  return (
    <div className="header-banner">
      <h1>
        <span>HI,</span> I'M WILLIAN MENDOZA
      </h1>
      <h2>SOFTWARE ENGINEER</h2>
      <div className="header-banner-socials">
        <a href="#">
          <i className="fab fa-github"></i>
        </a>
        <a href="#">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="#">
          <i className="fa fa-envelope"></i>
        </a>
      </div>
    </div>
  );
};

export default HeaderBanner;
