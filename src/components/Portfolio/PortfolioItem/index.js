import React from "react";
import "./styles.scss";

const PortfolioItem = ({ imageUrl, languages, description }) => {
  return (
    <div className="portfolio-content-item">
      <div className="portfolio-content-item-img">
        <div class="portfolio-content-item-overlay">
          <p class="portfolio-content-item-description">{description}</p>
          <a href="#">Preview</a>
        </div>
        <img src={imageUrl} alt="doctor_appointments" />
      </div>
      <div className="languages">
        {languages.map((language) => (
          <div key={language.label} className="languages-content">
            <label>
              {language.label}
              <a href="#">
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
