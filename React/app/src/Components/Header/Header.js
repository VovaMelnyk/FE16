import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = props => (
  <ul className="menu">
    <li className="menu__item">
      <NavLink to="/">HTML</NavLink>
    </li>
    <li className="menu__item">
      <NavLink to="/css">CSS</NavLink>
    </li>
    <li className="menu__item">
      <NavLink to="/javascript">Javascript</NavLink>
    </li>
    <li className="menu__item">
      <NavLink to="/frameworks">Frameworks</NavLink>
    </li>
  </ul>
);

export default Header;
