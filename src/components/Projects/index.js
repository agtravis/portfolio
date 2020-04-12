import React, { useContext } from 'react';
import PortfolioContext from '../../context/PortfolioContext';

function Projects() {
  const portfolio = useContext(PortfolioContext);
  console.log(`Projects`);
  console.log(portfolio);

  return (
    <ul>
      {portfolio.map((project, index) => (
        <li key={index}>
          {project.title}
          <br />
          {project.screenshot}
          <br />
          <img src={project.screenshot} alt={project.title} />
        </li>
      ))}
    </ul>
  );
}

export default Projects;
