import React, { useContext } from 'react';
import PortfolioContext from '../../context/PortfolioContext';

function ProjectList() {
  const portfolio = useContext(PortfolioContext);

  return (
    <ul>
      {portfolio.reverse().map((project, index) => (
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

export default ProjectList;
