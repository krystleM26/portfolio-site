import React, { Component } from "react";
import AboutMenuItem from "./AboutMenuItem";
import AboutSubheading from "./AboutSubheading";
import subheadingsData from "./subheadingsData";
import "../styles/aboutMenu.css";


export default class AboutMenu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeMenuItem: 1,
      activeSubheading: 1,
    }

  }

  handleMenuItemClick = (menuItem) => {
    this.setState({
      activeMenuItem: menuItem,
      activeSubheading: 1,
    })
  }

  handleSubheadingClick = (subheading) => {
    this.setState({
      activeSubheading: subheading,
    })
  };


  render() {
    const { activeMenuItem, activeSubheading } = this.state;
    const menuItems = ["Personal", "Education", "Career"];

    const subheadings = subheadingsData[activeMenuItem] || [];


    return (
      <div className="about-menu">
        <div className="tabs" role="tablist">
          {menuItems.map((item, index) => (
            <AboutMenuItem
              key={index}
              title={item}
              active={activeMenuItem === index + 1}
              onClick={() => this.handleMenuItemClick(index + 1)}
            />
          ))}
        </div>

        <div className="card sub-container">
          {subheadings.map((subheading, index) => (
            <AboutSubheading
              key={`${activeMenuItem}-${index}`}
              title={subheading.title}
              content={subheading.content}
              active={activeSubheading === index + 1}
              onClick={() => this.handleSubheadingClick(index + 1)}
            />
          ))}
        </div>
      </div>
    );
  }
}
