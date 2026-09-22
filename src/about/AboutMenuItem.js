import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types';

const AboutMenuItem = ({ title, active, onClick }) => {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      className={classNames("tab", { active })}
      onClick={onClick}
    >
      {title}
    </button>
  )
}

AboutMenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default AboutMenuItem;
