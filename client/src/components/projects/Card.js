import React from "react";

export const Card = ({ classId, project }) => (
  <div className="card">
    <div className="card__side card__side--front">
      <div className={`card__picture card__picture--${classId}`}>&nbsp;</div>
      <h4 className="card__heading">
        <span className={`card__heading-span card__heading-span--${classId}`}>
          {project.name}
        </span>
      </h4>
      <div className="card__details">
        <ul>
          {/* <li>3 day tours</li>
                  <li>Up to 30 people</li>
                  <li>2 tour guides</li>
                  <li>Sleep in cozy hotels</li>
                  <li>Difficulty: easy</li> */}
        </ul>
      </div>
    </div>
    <div className={`card__side card__side--back card__side--back-${classId}`}>
      <div className="card__cta">
        <div className="card__project-box">
          <a href={project.githubLink} className="card__project-link">
            Github
          </a>
          <a href={project.deploymentLink} className="card__project-link">
            Live
          </a>
        </div>
      </div>
    </div>
  </div>
);
