import React, { useContext } from 'react';
import PortfolioContext from '../../context/PortfolioContext';
import ContainerHeader from '../../components/ContainerHeader';
import Project from '../Project';

function ProjectList() {
  const portfolio = useContext(PortfolioContext);

  const toggleTransparent = (project) => {
    if (!project.parentElement.children[1].classList.contains('opacity')) {
      project.parentElement.children[1].classList.add('opacity');
      project.parentElement.children[1].classList.remove('pointer');
      project.parentElement.children[2].classList.remove('hide');
    } else {
      project.parentElement.children[1].classList.remove('opacity');
      project.parentElement.children[1].classList.add('pointer');
      project.parentElement.children[2].classList.add('hide');
    }
  };

  const toggleOpaqueLeave = (project) => {
    document.getElementById(project).children[1].classList.remove('opacity');
    document.getElementById(project).children[1].classList.add('pointer');
    document.getElementById(project).children[2].classList.add('hide');
  };

  const toggleMousedown = (project) => {
    document
      .getElementById(project)
      .parentElement.parentElement.children[2].classList.add('hide');
    document
      .getElementById(project)
      .parentElement.parentElement.children[1].classList.remove('opacity');
    document
      .getElementById(project)
      .parentElement.parentElement.children[1].classList.add('pointer');
    document
      .getElementById(project)
      .parentElement.parentElement.children[1].classList.add('active');
  };

  const toggleMouseup = (project) => {
    if (
      !document
        .getElementById(project)
        .parentElement.children[1].classList.contains('opacity')
    ) {
      document
        .getElementById(project)
        .parentElement.children[1].classList.remove('active');
      document
        .getElementById(project)
        .parentElement.children[1].classList.remove('opacity');
      document
        .getElementById(project)
        .parentElement.children[1].classList.add('pointer');
    }
  };

  return (
    <div>
      <ContainerHeader title="My Portfolio" />
      <div id="portfolio-contents">
        {portfolio.reverse().map((project, index) => (
          <Project
            key={index}
            id={index}
            title={project.title}
            href={project.href}
            github={project.github}
            description={project.description}
            screenshot={project.screenshot}
            toggleTransparent={toggleTransparent}
            toggleOpaqueLeave={toggleOpaqueLeave}
            toggleMousedown={toggleMousedown}
            toggleMouseup={toggleMouseup}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
