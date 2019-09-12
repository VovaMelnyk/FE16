import React from 'react';
// import PropTypes from 'prop-types';
import { FaUserAlt, FaShoppingCart } from 'react-icons/fa';
import './Header.css';

const Header = () => (
  <header className="header">
    <ul className="nav">
      <li className="nav__item">
        <FaUserAlt />
      </li>
      <li className="nav__item">
        <FaShoppingCart />
      </li>
    </ul>
  </header>
);

Header.propTypes = {
  // bla: PropTypes.string,
};

Header.defaultProps = {
  // bla: 'test',
};

export default Header;
