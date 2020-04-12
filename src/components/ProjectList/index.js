import React, { useContext } from 'react';
import PortfolioContext from '../../context/PortfolioContext';

function ProjectList() {
  const portfolio = useContext(PortfolioContext);
  console.log(`ProjectList`);
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

export default ProjectList;
