import React from 'react';
import './styles.scss';
import PageTitle from 'components/PageTitle';
import SubTitle from 'components/SubTitle';
import AboutSkillsContainer from './AboutSkillsContainer';

const About = () => {
  return (
    <div id="about" className="about">
      <PageTitle title="about" />

      <div className="about-me">
        <SubTitle title="me" />
        <p>
          Since I started in the programming world, I've been working and
          learning new things in every experience I've had, and the best part is
          that I love it. Working by myself as a freelancer and with colleagues
          has given to me a good view of being a software developer and how is
          the feeling and responsibility of wearing different hats in a software
          development process.
        </p>
      </div>

      <div className="about-skills">
        <SubTitle title="skills" />
        <AboutSkillsContainer
          skills={[
            {
              label: 'BACK-END',
              items: ['node js', 'express js', 'php/laravel'],
            },
            {
              label: 'FRONT-END',
              items: [
                'react js',
                'redux js',
                'typescript',
                'jest/enzyme (unit testing)',
                'html',
                'css & sass',
                'jquery',
                'vue js',
              ],
            },
            {
              label: 'DATA BASES',
              items: ['mysql', 'mongodb'],
            },
            {
              label: 'TOOLS',
              items: [
                'git',
                'github',
                'jira/confluence',
                'postman',
                'vscode',
                'netlify',
                'npm',
              ],
            },
          ]}
        />
      </div>
    </div>
  );
};

export default About;
