/* eslint-disable*/
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import '../styles/aboutMenu.css'



const AboutMenuItem = ({ title, active, onClick }) => {
 
    return (
      <div className={classNames("item", { active })} onClick={onClick}>
      <h2 className='title'>{title}</h2>
        
      </div>
    )
  
}
/* eslint-disable*/


export default AboutMenuItem;
