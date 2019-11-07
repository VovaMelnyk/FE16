import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = props => (
  <ul className="menu">
    <li className="menu__item">
      <NavLink to="/">Click</NavLink>
    </li>
    <li className="menu__item">
      <NavLink to="/counter">Counter</NavLink>
    </li>
    <li className="menu__item">
      <NavLink to="/fetch">Fetch</NavLink>
    </li>
    <li className="menu__item">
      <NavLink to="/practice">Practice</NavLink>
    </li>
    <li className="menu__item">
      <NavLink to="/crud-app">crud</NavLink>
    </li>
  </ul>
);

export default Header;
