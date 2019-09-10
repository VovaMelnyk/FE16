import React from 'react';
import './Sidebar.css';
import PropTypes from 'prop-types';
import MenuItem from '../MenuItem/MenuItem';

const Sidebar = ({ menu }) => {
  return (
    <ul className="sidebar">
      {/* <MenuItem text='Dashboard' href='/dashboard'/>
            <MenuItem text='User' href='/user' active={true}/>
            <MenuItem text='Contact' href='/contact'/> */}
      {menu.map(el => (
        <MenuItem text={el.text} href={el.href} key={el.text} />
      ))}
    </ul>
  );
};

Sidebar.propTypes = {
  menu: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Sidebar;
