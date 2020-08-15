import React from 'react';

const SkillsContext = React.createContext({
  HTML: (
    <span>
      My comfort zones: <span className="emphasize">React & JSX</span>, Tacos,{' '}
      <span className="emphasize">JavaScript</span>, Cats,{' '}
      <span className="emphasize">MSSQL/MySQL & Sequelize</span>, Sci-Fi,{' '}
      <span className="emphasize">Node.JS</span>, Cartoons,{' '}
      <span className="emphasize">Express</span>, History,{' '}
      <span className="emphasize">Handlebars & EJS</span>, Retro Video Games,{' '}
      <span className="emphasize">MongoDB & Mongoose</span>...
    </span>
  ),
});

export default SkillsContext;
