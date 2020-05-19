import React from 'react';

const PortfolioContext = React.createContext({
  portfolio: [
    {
      title: '++My GitHub Profile',
      href: 'https://github.com/agtravis',
      github: 'https://github.com/agtravis',
      description: 'View my GitHub profile and browse all my repositories',
      screenshot: 'assets/images/github-profile.png',
      position: 7,
    },
    {
      title: '++My Resumé',
      href:
        'https://github.com/agtravis/alexander-george-travis-resume/blob/master/alexander-george-travis-resume.pdf',
      github: 'https://github.com/agtravis/alexander-george-travis-resume',
      description: 'View my version-controlled and up-to-date resumé',
      screenshot: 'assets/images/resume.png',
      position: 8,
    },
    {
      title: 'Password Generator',
      href: 'https://agtravis.github.io/homework-week-3/index.html',
      github: 'https://github.com/agtravis/homework-week-3',
      description:
        'A random password generator with user input and rules defining the result',
      screenshot: 'assets/images/password-generator.PNG',
      position: 0,
    },
    {
      title: 'Timed Quiz',
      href: 'https://agtravis.github.io/homework-week-4/index.html',
      github: 'https://github.com/agtravis/homework-week-4',
      description:
        'Test yourself on multiple topics, with conditional scoring and distinctive local storage high-scores',
      screenshot: 'assets/images/timed-quiz.png',
      position: 0,
    },
    {
      title: 'Day Planner',
      href: 'https://agtravis.github.io/homework-week-5/index.html',
      github: 'https://github.com/agtravis/homework-week-5',
      description:
        'A daily planner for office hours with local storage conditional time-slots for any date',
      screenshot: 'assets/images/day-planner.png',
      position: 0,
    },
    {
      title: 'Weather Dashboard',
      href: 'https://agtravis.github.io/homework-week-6/index.html',
      github: 'https://github.com/agtravis/homework-week-6',
      description:
        'A weather forecast tool with 3rd party API queries & geolocation',
      screenshot: 'assets/images/weather-dashboard.png',
      position: 0,
    },
    {
      title: 'Pocket Bartender',
      href: 'https://agtravis.github.io/pocket-bartender/index.html',
      github: 'https://github.com/agtravis/pocket-bartender',
      description:
        'Mobile first app with API queries & local storage for inspiration with home cocktailing',
      screenshot: 'assets/images/pocket-bartender.png',
      position: 3,
    },
    {
      title: 'Resume Generator',
      href: 'https://github.com/agtravis/node-resume-generator',
      github: 'https://github.com/agtravis/node-resume-generator',
      description:
        'CLI to run with Node.JS that uses the GitHub API to generate a PDF resume with theme selection',
      screenshot: 'assets/images/node-resume-generator.png',
      position: 0,
    },
    {
      title: 'Dev-Team Builder',
      href: 'https://github.com/agtravis/employee-summary-team-builder',
      github: 'https://github.com/agtravis/employee-summary-team-builder',
      description:
        'CLI to run with Node.JS that takes user input to assemble a project team, uses regex validation',
      screenshot: 'assets/images/employee-summary-team-builder.png',
      position: 0,
    },
    {
      title: 'Note Taker',
      href: 'https://agtravis-note-taker.herokuapp.com/',
      github: 'https://github.com/agtravis/note-taker',
      description:
        'Heroku deployed app written in JavaScript for Node.JS that runs in the browser and stores user input on a server',
      screenshot: 'assets/images/enter-notes.PNG',
      position: 0,
    },
    {
      title: 'Employee Tracker',
      href: 'https://github.com/agtravis/employee-tracker',
      github: 'https://github.com/agtravis/employee-tracker',
      description:
        'CLI running in Node.JS that navigates a SQL DB where a user can manage a team of employees, CRUD features',
      screenshot: 'assets/images/employee-tracker.png',
      position: 0,
    },
    {
      title: 'Restaurant Simulator',
      href: 'https://agtravis-burger.herokuapp.com/',
      github: 'https://github.com/agtravis/burger',
      description:
        'An app that runs in the browser via Heroku and utilizing SQL and CRUD operations to create a fun UI',
      screenshot: 'assets/images/burger-app.png',
      position: 6,
    },
    {
      title: 'Rinqydink Arcade',
      href: 'https://rinqydinky.herokuapp.com/',
      github: 'https://github.com/agtravis/RINQYDINK',
      description:
        'An online gaming community featuring games, chat, member profiles with high scores. Games written in JS',
      screenshot: 'assets/images/game-chat.png',
      position: 2,
    },
    {
      title: 'Workout Tracker',
      href: 'https://agtravis-workout-tracker.herokuapp.com/',
      github: 'https://github.com/agtravis/workout-tracker',
      description:
        'A graphical interface for users to be able to track their fitness using MongoDB and Mongoose',
      screenshot: 'assets/images/workout-tracker.PNG',
      position: 0,
    },
    {
      title: 'Budget Tracker',
      href: 'https://agtravis-budget-tracker.herokuapp.com/',
      github: 'https://github.com/agtravis/budget-tracker',
      description:
        'A Progressive Web App, installable and functional offline, using IndexDB, a service worker, & manifest',
      screenshot: 'assets/images/budget-tracker.png',
      position: 0,
    },
    {
      title: 'Employee Directory',
      href: 'https://agtravis.github.io/employee-directory/',
      github: 'https://github.com/agtravis/employee-directory',
      description:
        'A simple app using React components, state, props, & context, to organize and filter an API response',
      screenshot: 'assets/images/employee-directory.png',
      position: 5,
    },
    {
      title: 'Bookshelf App',
      href: 'https://agtravis-google-books.herokuapp.com/',
      github: 'https://github.com/agtravis/google-books',
      description:
        'Full MERN stack app that offers information on searched books, and allows a user to save favorites in a database',
      screenshot: 'assets/images/google-books.png',
      position: 4,
    },
    {
      title: 'Book-It-Yourself',
      href: 'https://book-it-yourself.herokuapp.com/',
      github: 'https://github.com/agtravis/book-it-yourself',
      description:
        'Responsive MERN stack app with offline functionality & user account password encryption connecting DIY musician communities',
      screenshot: 'assets/images/book-it-yourself.png',
      position: 1,
    },
  ],
});

export default PortfolioContext;
