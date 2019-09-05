import React from 'react';
import './Sidebar.css';
import MenuItem from '../MenuItem/MenuItem';
import PropTypes from 'prop-types';
const Sidebar = (props) => {
    return (
        <ul className='sidebar'>
            {/* <MenuItem text='Dashboard' href='/dashboard'/>
            <MenuItem text='User' href='/user' active={true}/>
            <MenuItem text='Contact' href='/contact'/> */}
            {props.menu.map(el => <MenuItem text={el.text} href={el.href} key={el.text}/>)}
        </ul>
    );
};

Sidebar.propTypes = {
    menu: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string.isRequired,
            href: PropTypes.string.isRequired,
        }),
    ),
}

export default Sidebar;