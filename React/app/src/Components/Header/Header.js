import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = props => (
  <ul className="navigation">
    <li className="navigation__item">
      <NavLink to="/" className="navigation__link">
        Home
      </NavLink>
    </li>
    <li className="navigation__item">
      <NavLink to="/users" className="navigation__link">
        Users
      </NavLink>
    </li>
    <li className="navigation__item">
      <NavLink to="/contact" className="navigation__link">
        Contact
      </NavLink>
    </li>
  </ul>
);

export default Header;
