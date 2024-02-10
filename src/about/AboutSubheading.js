import React from 'react';

import '../styles/aboutMenu.css';

const AboutSubheading = (title, content
) => {


function handleTitle  ()  {
 alert('Title Clicked')
}

 
  return (
    <div
      
    >
      <h3 onClick={handleTitle}>{title}</h3>
      <div className="p-container">{content}</div>
    </div>
  );
};

export default AboutSubheading;
