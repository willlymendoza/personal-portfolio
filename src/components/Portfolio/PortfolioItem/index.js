import React from "react";
import "./styles.scss";

const PortfolioItem = ({ data }) => {
  return (
    <div className="portfolio-content-item">
      <div className="portfolio-content-item-img">
        <div className="portfolio-content-item-overlay">
          <p className="portfolio-content-item-description">
            {data.description}
          </p>
          <a href={data.link} target="_blank" rel="noopener noreferrer">
            Preview
          </a>
        </div>
        <img src={data.img} alt="doctor_appointments" />
      </div>
      <div className="languages">
        {data.languages.map((language) => (
          <div key={language.label} className="languages-content">
            <label>
              {language.label}
              <a href={language.link} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
            </label>
            <ul>
              {language.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioItem;
