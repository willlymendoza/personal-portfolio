import React from 'react';
import './styles.scss';
import PageTitle from 'components/PageTitle';
import PortfolioItem from './PortfolioItem';

const projects = [
  {
    id: 1,
    img: 'https://tpss.s3.amazonaws.com/doctors_appointments.png',
    link: 'https://doctor-appointments.netlify.app',
    description:
      'Doctor Appointments, this is an App that lets you create, view and update Patients and Appointments with a Dashboard showing the most relevant information about them.',
    languages: [
      {
        label: 'Front-end',
        items: ['html', 'css', 'sass', 'react', 'redux'],
        link: 'https://github.com/willlymendoza/doctor_appointments_front_end',
      },
      {
        label: 'Back-end',
        items: ['node js', 'express js', 'mongodb'],
        link: 'https://github.com/willlymendoza/doctor_appointments',
      },
    ],
  },
  {
    id: 2,
    img: 'https://tpss.s3.amazonaws.com/pizzarestaurant.jpg',
    link: 'https://pizzarestaurant.netlify.app',
    description:
      'Pizza Restaurant Page, you can check their menu, get in touch, and see their short story. Also you can visit their blog with the latest posts and recipes.',
    languages: [
      {
        label: 'Front-end',
        items: ['html', 'css', 'sass', 'javascript', 'react'],
        link: 'https://github.com/willlymendoza/pizza-restaurant',
      },
    ],
  },
];

const Portfolio = () => {
  return (
    <div id="portfolio" className="portfolio">
      <PageTitle title="portfolio" />
      <div className="portfolio-content">
        {projects.map((item) => (
          <PortfolioItem key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
