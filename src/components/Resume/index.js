import React from "react";
import "./styles.scss";

const Resume = () => {
  return (
    <div id="resume" className="resume">
      <h1 className="title">Resume</h1>
      <div className="resume-links">
        <a
          href="https://tpss.s3.amazonaws.com/resume_en.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume EN <i className="fa fa-download"></i>
        </a>
        <a
          href="https://tpss.s3.amazonaws.com/resume_es.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume ES <i className="fa fa-download"></i>
        </a>
      </div>
    </div>
  );
};

export default Resume;
