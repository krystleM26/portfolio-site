import React from 'react'
import classNames from 'classnames'
import '../styles/aboutMenu.css'
import PropTypes from 'prop-types';



const AboutSubheading = ({ title, content, active, onClick, menuItem }) => {

  AboutSubheading.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.element.isRequired, // Assuming content is a React element
    active: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    menuItem: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  };

  
  const subContainerClass = `sub-container-${menuItem}`
    console.log('content',content);
    return (
      <div className={classNames(subContainerClass, { "active-subheading": active })} >
      <h3 onClick={onClick}>{title}</h3>
        <div className="p-container">{content}</div>
      </div>
    )
  
}



export default AboutSubheading;
