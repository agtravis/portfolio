import React from 'react';
import './style.css';

function Project(props) {
  return (
    <div className="portfolio-slot" id={`portfolio-slot${props.id}`}>
      <h5 className="portfolio-heading">{props.title}</h5>
      <img
        className="portfolio-img pointer"
        data-lazy={props.screenshot}
        alt={props.title}
        id={`portfolio-image${props.id}`}
        src={props.screenshot}
        onClick={() => props.toggleTransparent(`${props.id}`)}
        onMouseUp={() => props.toggleMouseup(`${props.id}`)}
      />
      <div
        id={`container${props.id}`}
        className="portfolio-container-div hide"
        onMouseLeave={() => props.toggleOpaqueLeave(`${props.id}`)}
      >
        <p
          className="portfolio-para bold"
          id={`description${props.id}`}
          onMouseDown={() => props.toggleMousedown(`${props.id}`)}
        >
          {props.description}
        </p>
        {props.href !== props.github ? (
          <>
            <a
              href={props.href}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-link"
              id={`deployed-app${props.id}`}
            >
              Deployed App
            </a>
            <a
              href={props.github}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-link"
              id={`github${props.id}`}
            >
              GitHub Repo
            </a>
          </>
        ) : (
          <a
            href={props.github}
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-link"
            id={`github${props.id}`}
          >
            GitHub Repo
          </a>
        )}
      </div>
    </div>
  );
}

export default Project;
