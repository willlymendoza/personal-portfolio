import React from "react";
import "./styles.scss";
import PageTitle from "components/PageTitle";
import SubTitle from "components/SubTitle";
import AboutSkillsContainer from "./AboutSkillsContainer";

const About = () => {
  return (
    <div id="about" className="about">
      <PageTitle title="about" />

      <div className="about-me">
        <SubTitle title="me" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          culpa officiis quo quia saepe quae earum ea enim nam inventore quidem
          error accusamus minus odit, atque quibusdam libero voluptas deleniti.
        </p>
      </div>

      <div className="about-skills">
        <SubTitle title="skills" />
        <AboutSkillsContainer
          skills={[
            {
              label: "BACK-END",
              items: ["node js", "express js", "php/laravel"],
            },
            {
              label: "FRONT-END",
              items: ["node js", "express js", "php/laravel"],
            },
            {
              label: "DATA BASES",
              items: ["node js", "express js", "php/laravel"],
            },
            { label: "TOOLS", items: ["node js", "express js", "php/laravel"] },
          ]}
        />
      </div>
    </div>
  );
};

export default About;
