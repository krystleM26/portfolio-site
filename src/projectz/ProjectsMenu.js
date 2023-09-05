import React, { Component } from 'react';
import classNames from 'classnames';
import projects from './projectsData';
import '../styles/projectMenu.css';

export default class ProjectsMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeProject: 1,
    };
  }
  handleProjectClick = (project) => {
    this.setState({
      activeProject: project,
    });
  };

  renderContent = (projects) => {
    return projects.map((project, index) => (
      <div key={index} className={`project-sub-container-${index + 1}`}>
        <h3>{project.title}</h3>
        <image src={project.image} alt={project.title}></image>
        <div>{project.description}</div>
        <div className="link-container">
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            GITHUB
          </a>
          <a href={project.demo} target="_blank" rel="noopener noreferrer">
            DEMO
          </a>
        </div>
      </div>
    ));
  };

  render() {
    // console.log('helloasdasdas', this.state);
    // console.log('projects', projects);
    let { activeProject } = this.state;
    return (
      <div className="project-menu">
        <div className="project-items-container">
          {Object.keys(projects).map((item, index) => (
            <div
              key={index}
              className={classNames('project-item', {
                activeProject: activeProject === parseInt(item, 10),
              })}
              onClick={() => this.handleProjectClick(parseInt(item, 10))}
            >
              <h2 className="title">{projects[item].title}</h2>
              {index + 1 === activeProject ? (
                <div className="activeProject">
                  <img src={projects[item].image} />
                  <p>{projects[item].description}</p>
                  <a href={projects[item].github}>Github</a>
                  <a href={projects[item].demo}>Demo </a>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
