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

  renderContent = (project) => {
    const hasDemo = /^https?:\/\//.test(project.demo);
    return (
      <article key={project.title} className="card project-card">
        <div className="project-image">
          <img src={project.image} alt={project.title} />
        </div>
        <div className="project-body">
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <div className="link-container">
            {hasDemo ? (
              <a className="button" href={project.demo} target="_blank" rel="noopener noreferrer">
                Live site
              </a>
            ) : (
              <span className="button muted">Demo in progress</span>
            )}
            <a className="button ghost" href={project.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </article>
    );
  };

  render() {
    const { activeProject } = this.state;
    const projectIds = Object.keys(projects).map(Number);
    return (
      <section className="page project-menu">
        <header className="page-header">
          <p className="eyebrow">Selected work</p>
          <h1 className="display">Projects</h1>
        </header>

        <div className="tabs" role="tablist">
          {projectIds.map((id) => (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={activeProject === id}
              className={classNames('tab', {
                active: activeProject === id,
              })}
              onClick={() => this.handleProjectClick(id)}
            >
              {projects[id].title}
            </button>
          ))}
        </div>

        {this.renderContent(projects[activeProject])}
      </section>
    );
  }
}
