import React from 'react'
import classNames from 'classnames'
import '../styles/aboutMenu.css'
import PropTypes from 'prop-types';

const AboutMenuItem = ({ title, active, onClick }) => {

  AboutMenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
  };
 
    return (
      <div className={classNames("item", { active })} onClick={onClick}>
      <h2 className='title'>{title}</h2>
      </div>
        
    )
  
}



export default AboutMenuItem;
