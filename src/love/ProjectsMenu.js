import React, { Component } from 'react';
import classNames from 'classnames';
import projects from '.';
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
        <img src={project.image} alt={project.title}></img>
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
    let { activeProject } = this.state;
    console.log('state', this.state);
    return (
      <div className="project-menu">
        <o>asfdasfsssdf</o>
        <div className="project-items-container">
          {Object.keys(projects).map((item, index) => (
            <div
              key={index}
              className={classNames('project-item', {
                activeProject: activeProject === index + 1,
              })}
              onClick={() => this.handleProjectClick(index + 1)}
            >
              <h2 className="title"> (item)</h2>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
