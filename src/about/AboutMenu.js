import React, { Component } from 'react'
import AboutMenuItem from './AboutMenuItem'
import AboutSubheading from './AboutSubheading'
import subheadingsData from './subheadingsData'
import personalIcon from '../assets/moebius-triangle.png'
import educationIcon from '../assets/upgrade.png'
import careerIcon from '../assets/triple-corn.png'

export default class AboutMenu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeMenuItem: 1,
      activeSubheading: 1,
    };
  }

  handleMenuItemClick = (menuItem) => {
    this.setState({
      activeMenuItem: menuItem,
      activeSubheading: 1,
    })
  }

  handleSubHeadingClick = (subHeading) => {
    this.setState({
      activeSubheading: subHeading,
    })
  }



  render() {
    let { activeMenuItem, activeSubheading } = this.state;
    let menuItems = ["PERSONAL", "EDUCATION", "CAREER"];
    let activeMenuTitle = menuItems[activeMenuItem - 1];
    let activeMenuIcon =
          activeMenuTitle === "PERSONAL" ? personalIcon : activeMenuTitle === "EDUCATION" ? educationIcon : careerIcon;

    let subHeadings = subheadingsData[activeMenuItem];





    return (
      <>
     
      <div className='menu'> 
        {menuItems.map((item, index) => (
        <AboutMenuItem 
        key={index}
        title={item}
        active={activeMenuItem === index + 1}
        onClick={() => this.handleMenuItemClick(index + 1)}
        
        
          />
        ))}
   
      </div>
       <div className='sub-container'> 
       <div className='icon-title-container'>
          <img src={activeMenuIcon} alt={activeMenuTitle} className="icon"/>
          <h3>{activeMenuTitle}</h3>

       </div>
       {subHeadings.map((subHeadings, index) => (
        <AboutSubheading
        key={index}
        title={subHeadings.title}
        content={subHeadings.content}
        active={activeSubheading === index + 1}
        onClick={() => this.handleSubheadingClick(index + 1)}
        menuItem = {activeMenuIcon}
        />

        ))}
      
        </div>
    
        </>
      );
    }
  }
