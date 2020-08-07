import React from "react";
import "./styles.scss";
import Portfolio from "components/Portfolio";
import About from "components/About";
import Resume from "components/Resume";
import Contact from "components/Contact";

const index = () => {
  return (
    <main className="main">
      <div className="main-content">
        <Portfolio />
        <About />
        <Resume />
        <Contact />
      </div>
    </main>
  );
};

export default index;
