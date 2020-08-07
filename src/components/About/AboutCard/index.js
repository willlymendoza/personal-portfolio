import React, { Fragment } from "react";
import "./styles.scss";

const AboutCard = ({ skill }) => {
  return (
    <Fragment>
      <div className="card">
        <h3 className="card-title">{skill.label}</h3>
        <hr />
        <ul>
          {skill.items.map((item) => (
            <li key={item} className="skill-chip">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default AboutCard;
