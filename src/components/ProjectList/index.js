import React, { useContext } from 'react';
import PortfolioContext from '../../context/PortfolioContext';
import SkillsContext from '../../context/SkillsContext';
import ContainerHeader from '../../components/ContainerHeader';
import Project from '../Project';
import './style.css';

function ProjectList() {
  const portfolio = useContext(PortfolioContext);
  const { HTML } = useContext(SkillsContext);
  const toggleTransparent = (project) => {
    if (
      !document
        .getElementById(`portfolio-image${project}`)
        .classList.contains('opacity')
    ) {
      document
        .getElementById(`portfolio-image${project}`)
        .classList.add('opacity');
      document.getElementById(`portfolio-image${project}`).style.opacity =
        '15%';
      document
        .getElementById(`portfolio-image${project}`)
        .classList.remove('pointer');
      document.getElementById(`container${project}`).classList.remove('hide');
    } else {
      document
        .getElementById(`portfolio-image${project}`)
        .classList.remove('opacity');

      document.getElementById(`portfolio-image${project}`).style.opacity =
        '100%';
      document
        .getElementById(`portfolio-image${project}`)
        .classList.add('pointer');
      document.getElementById(`container${project}`).classList.add('hide');
    }
  };

  const toggleOpaqueLeave = (project) => {
    document
      .getElementById(`portfolio-image${project}`)
      .classList.remove('opacity');
    document.getElementById(`portfolio-image${project}`).style.opacity = '100%';
    document
      .getElementById(`portfolio-image${project}`)
      .classList.add('pointer');
    document.getElementById(`container${project}`).classList.add('hide');
  };

  const toggleMousedown = (project) => {
    document.getElementById(`container${project}`).classList.add('hide');
    document
      .getElementById(`portfolio-image${project}`)
      .classList.remove('opacity');
    document.getElementById(`portfolio-image${project}`).style.opacity = '100%';
    document
      .getElementById(`portfolio-image${project}`)
      .classList.add('pointer');
    document
      .getElementById(`portfolio-image${project}`)
      .classList.add('active');
  };

  const toggleMouseup = (project) => {
    if (
      !document
        .getElementById(`portfolio-image${project}`)
        .classList.contains('opacity')
    ) {
      document
        .getElementById(`portfolio-image${project}`)
        .classList.remove('active');
      document
        .getElementById(`portfolio-image${project}`)
        .classList.remove('opacity');
      document.getElementById(`portfolio-image${project}`).style.opacity =
        '100%';
      document
        .getElementById(`portfolio-image${project}`)
        .classList.add('pointer');
    }
  };

  return (
    <div>
      <ContainerHeader
        title="My Portfolio"
        subtitle={HTML}
        instructions="- click the screenshot buttons for more info, and links to deployed
          apps and repos!"
      />
      <div id="portfolio-contents">
        {portfolio
          .filter((project) => project.position > 0)
          .sort((a, b) => a.position - b.position)
          .map((project, index) => (
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
