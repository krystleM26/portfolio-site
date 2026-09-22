import React, { Component } from 'react';
import classNames from 'classnames';
import '../styles/skillsMenu.css';
import skills from './skillsData.js';

const MAX_LEVEL = 6;

export default class SkillsMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMenuItem: 1,
    };
  }

  handleMenuItemClick = (menuItem) => {
    this.setState({
      activeMenuItem: menuItem,
    });
  };

  renderContent = (skills) => {
    return skills.map((skill, index) => (
      <li key={index} className="skill-row">
        <h3>{skill.title}</h3>
        <div
          className="level-container"
          role="img"
          aria-label={`${skill.level} out of ${MAX_LEVEL}`}
        >
          {[...Array(MAX_LEVEL)].map((_, i) => (
            <span
              key={i}
              className={`level-point ${
                i < skill.level ? 'filled' : 'unfilled'
              }`}
            />
          ))}
        </div>
      </li>
    ));
  };

  render() {
    const { activeMenuItem } = this.state;
    const menuItems = ["Front-end", "Back-end"];

    return (
      <section className="page skill-menu">
        <header className="page-header">
          <p className="eyebrow">Toolkit</p>
          <h1 className="display">Skills</h1>
        </header>

        <div className="tabs" role="tablist">
          {menuItems.map((item, index) => (
            <button
              key={index}
              type="button"
              role="tab"
              aria-selected={activeMenuItem === index + 1}
              className={classNames('tab', {
                active: activeMenuItem === index + 1,
              })}
              onClick={() => this.handleMenuItemClick(index + 1)}
            >
              {item}
            </button>
          ))}
        </div>

        <ul key={activeMenuItem} className="card skill-sub-container">
          {this.renderContent(skills[activeMenuItem])}
        </ul>
      </section>
    );
  }
}
