import React from "react";
import { Card } from "./projects/Card";
import { PROJECTS } from "../utils/constants";

/* {PROJECTS.map((project, index) => (
  <div key={project.name} className="col-1-of-2">
    <Card classId={index + 1} project={project} />
  </div>
))} */

const getCard = id => (
  <div className="col-1-of-2">
    <Card classId={id + 1} project={PROJECTS[id]} />
  </div>
);

const Projects = () => (
  <section className="section-tours" id="section-tours">
    <div className="u-center-text u-margin-bottom-big">
      <h2 className="heading-secondary">My Recent Work</h2>
    </div>
    <div className="row">
      {getCard(0)}
      {getCard(1)}
    </div>
    <div className="row">
      {getCard(2)}
      {getCard(3)}
    </div>
  </section>
);

export default Projects;
