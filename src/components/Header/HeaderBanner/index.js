import React from "react";
import "./styles.scss";

const HeaderBanner = () => {
  return (
    <div className="header-banner">
      <h1>
        <span>HI,</span> I'M WILLIAN MENDOZA
      </h1>
      <h2>FULL-STACK DEVELOPER</h2>
      <div className="header-banner-socials">
        <a
          href="https://github.com/willlymendoza?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/willian-mendoza-75387a16b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="mailto:wyllmh5@gmail.com">
          <i className="fa fa-envelope"></i>
        </a>
      </div>
    </div>
  );
};

export default HeaderBanner;
