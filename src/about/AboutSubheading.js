import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import '../styles/aboutMenu.css'
import PropTypes from 'prop-types';



const AboutSubheading = ({ title, content, active, onClick, menuItem }) => {

  AboutSubheading.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.node.isRequired, // 'node allows str'
    active: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    menuItem: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  };

  
  const subContainerClass = `sub-container-${menuItem}`
  const [typedContent, setTypedContent] = useState('');
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    if(active && !isTyping && typeof content === 'string') {
      setIsTyping(true);
      let index = 0;
      const speed = 35;

      const type = () => {
        if(index < content.length) {
          setTypedContent(prev => prev + content.charAt(index));
          index++;
          setTimeout(type, speed)
        } else {
          setIsTyping(false)
        }
      }
      setTypedContent('');
      type();
    } else if (!active) {
      setTypedContent('');
      setIsTyping(false);
    }
  }, [active, content, isTyping])

    return (
      <div className={classNames(subContainerClass, { "active-subheading": active })} >
      <h3 onClick={onClick}>{title}</h3>
        <div className="p-container">{active && typeof content === 'string' 
        ? <p>{typedContent}</p> : active ? content : null} 
        </div>
      </div>
    )
  
}



export default AboutSubheading;
