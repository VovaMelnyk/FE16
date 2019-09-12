import React from 'react';
import PropTypes from 'prop-types';
import './MenuItem.css';

const MenuItem = ({ active, href, text }) => {
  return (
    <li className={`sidebar__item ${active === true ? 'active' : null}`}>
      <a href={href} className="sidebar__link">
        {text}
      </a>
    </li>
  );
};

MenuItem.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  active: PropTypes.bool,
};

MenuItem.defaultProps = {
  active: false,
};

export default MenuItem;
