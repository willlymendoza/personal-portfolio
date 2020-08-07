import React from "react";
import "./styles.scss";
import Portfolio from "components/Portfolio";
import About from "components/About";

const index = () => {
  return (
    <main className="main">
      <div className="main-content">
        <About />
        <Portfolio />
      </div>
    </main>
  );
};

export default index;
