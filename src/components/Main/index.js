import React from "react";
import "./styles.scss";
import Portfolio from "components/Portfolio";
import About from "components/About";
import Resume from "components/Resume";

const index = () => {
  return (
    <main className="main">
      <div className="main-content">
        <About />
        <Portfolio />
        <Resume />
      </div>
    </main>
  );
};

export default index;
