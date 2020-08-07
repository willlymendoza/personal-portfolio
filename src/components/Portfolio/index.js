import React from "react";
import "./styles.scss";
import PageTitle from "components/PageTitle";
import PortfolioItem from "./PortfolioItem";

const Portfolio = () => {
  return (
    <div id="portfolio" className="portfolio">
      <PageTitle title="portfolio" />
      <div className="portfolio-content">
        <PortfolioItem
          imageUrl="https://tpss.s3.amazonaws.com/doctors_appointments.png"
          languages={[
            { label: "Front-end", items: ["html", "css", "react", "redux"] },
            { label: "Back-end", items: ["node js", "express js", "mongodb"] },
          ]}
        />
      </div>
    </div>
  );
};

export default Portfolio;