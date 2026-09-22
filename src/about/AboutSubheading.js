import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types';

const AboutSubheading = ({ title, content, active, onClick }) => {
  return (
    <div className={classNames("subheading", { "active-subheading": active })}>
      <button
        type="button"
        className="subheading-title"
        aria-expanded={active}
        onClick={onClick}
      >
        <h3>{title}</h3>
        <span className="chevron" aria-hidden="true" />
      </button>
      {active && (
        <div className="p-container">
          {typeof content === 'string' ? <p>{content.trim()}</p> : content}
        </div>
      )}
    </div>
  )
}

AboutSubheading.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired, // 'node allows str'
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default AboutSubheading;
