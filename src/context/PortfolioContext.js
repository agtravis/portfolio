import React, { createContext } from 'react';

const PortfolioContext = createContext({
  portfolio: [
    {
      title: 'Password Generator',
      href: 'https://agtravis.github.io/homework-week-3/index.html',
      github: 'https://github.com/agtravis/homework-week-3',
      description:
        'A random password generator with user input and rules defining the result',
      screenshot: 'assets/images/password-generator.PNG',
    },
    {
      title: 'Timed Quiz',
      href: 'https://agtravis.github.io/homework-week-4/index.html',
      github: 'https://github.com/agtravis/homework-week-4',
      description:
        'Test yourself on multiple topics, with conditional scoring and distinctive local storage high-scores',
      screenshot: 'assets/images/timed-quiz.png',
    },
    {
      title: 'Day Planner',
      href: 'https://agtravis.github.io/homework-week-5/index.html',
      github: 'https://github.com/agtravis/homework-week-5',
      description:
        'A daily planner for office hours with local storage conditional time-slots for any date',
      screenshot: 'assets/images/day-planner.png',
    },
    {
      title: 'Weather Dashboard',
      href: 'https://agtravis.github.io/homework-week-6/index.html',
      github: 'https://github.com/agtravis/homework-week-6',
      description:
        'A weather forecast tool with 3rd party API queries & geolocation',
      screenshot: 'assets/images/weather-dashboard.png',
    },
    {
      title: 'Pocket Bartender',
      href: 'https://agtravis.github.io/pocket-bartender/index.html',
      github: 'https://github.com/agtravis/pocket-bartender',
      description:
        'Mobile first app with API queries & local storage for inspiration with home cocktailing',
      screenshot: 'assets/images/pocket-bartender.png',
    },
    {
      title: 'Resume Generator',
      href: 'https://github.com/agtravis/node-resume-generator',
      github: 'https://github.com/agtravis/node-resume-generator',
      description:
        'CLI to run with Node.JS that uses the GitHub API to generate a PDF resume with theme selection',
      screenshot: 'assets/images/node-resume-generator.png',
    },
    {
      title: 'Dev-Team Builder',
      href: 'https://github.com/agtravis/employee-summary-team-builder',
      github: 'https://github.com/agtravis/employee-summary-team-builder',
      description:
        'CLI to run with Node.JS that takes user input to assemble a project team, uses regex validation',
      screenshot: 'assets/images/employee-summary-team-builder.png',
    },
    {
      title: 'Note Taker',
      href: 'https://agtravis-note-taker.herokuapp.com/',
      github: 'https://github.com/agtravis/note-taker',
      description:
        'Heroku deployed app written in JavaScript for Node.JS that runs in the browser and stores user input on a server',
      screenshot: 'assets/images/enter-notes.PNG',
    },
    {
      title: 'Employee Tracker',
      href: 'https://github.com/agtravis/employee-tracker',
      github: 'https://github.com/agtravis/employee-tracker',
      description:
        'CLI running in Node.JS that navigates a SQL DB where a user can manage a team of employees, CRUD features',
      screenshot: 'assets/images/employee-tracker.png',
    },
    {
      title: 'Burger App',
      href: 'https://agtravis-burger.herokuapp.com/',
      github: 'https://github.com/agtravis/burger',
      description:
        'An app that runs in the browser via Heroku and utilizing SQL and CRUD operations to create a fun UI',
      screenshot: 'assets/images/burger-app.png',
    },
    {
      title: 'Rinqydink Arcade',
      href: 'https://rinqydinky.herokuapp.com/',
      github: 'https://github.com/agtravis/RINQYDINK',
      description:
        'An online gaming community featuring games, chat, member profiles with high scores. Games written in JS',
      screenshot: 'assets/images/game-chat.png',
    },
    {
      title: 'Workout Tracker',
      href: 'https://agtravis-workout-tracker.herokuapp.com/',
      github: 'https://github.com/agtravis/workout-tracker',
      description:
        'A graphical interface for users to be able to track their fitness using MongoDB and Mongoose',
      screenshot: 'assets/images/workout-tracker.PNG',
    },
  ],
});

export default PortfolioContext;
