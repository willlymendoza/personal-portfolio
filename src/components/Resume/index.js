import React from "react";
import "./styles.scss";

const Resume = () => {
  return (
    <div id="resume" className="resume">
      <h1 className="title">Resume</h1>
      <div className="resume-links">
        <a href="#">
          Resume EN <i className="fa fa-download"></i>
        </a>
        <a href="#">
          Resume ES <i className="fa fa-download"></i>
        </a>
      </div>
    </div>
  );
};

export default Resume;
