import React, { Component } from 'react';
import classNames from 'classnames';
import '../styles/skillsMenu.css';
import skills from './skillsData.js';
import frontendIcon from '../assets/eagle-emblem.png';
import backendIcon from '../assets/hawk-emblem.png';
import Avatar from '../avatar/Avatar.js';


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
      <div
        key={index}
        className={`skill-sub-container-${this.state.activeMenuItem}`}
      >
        <h3>{skill.title}</h3>
        <div className="level-container">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`level-point ${
                i < skill.level ? 'filled' : 'unfilled'
              }`}
            />
          ))}
        </div>
      </div>
    ));
  };

  render() {
    const { activeMenuItem } = this.state;
    const menuItems = ["FRONT-END", "BACK-END"];

    const curIcon = activeMenuItem === 1 ? frontendIcon : backendIcon;
    console.log(curIcon, 'curIcon')

    return (
      <div className='body-container' >
        <Avatar page="skills"   />
        <div className="skill-menu">
        {menuItems.map((item, index) => (
          <div 
            key={index}
            className={classNames('skill-item', {
              activeSkill: activeMenuItem === index + 1,
            })}
            onClick={() => this.handleMenuItemClick(index + 1)}
          >
           
              <h2>{item}</h2>
          </div>
        ))}
        <img className="skill-icon" src={curIcon} alt="current skill" />
        <div className="skill-sub-container">
          {this.renderContent(skills[activeMenuItem])}
        </div>
      </div>
    </div>
    );
  }
}
