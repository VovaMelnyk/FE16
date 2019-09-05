import React from 'react';
import PropTypes from 'prop-types';
import './MenuItem.css'

const MenuItem = (props) => {
    console.log('props', props);
    // console.log(props.active && 'active');
    return (
        <li className={props.active === true ? 'active' : null}>
            <a href={props.href}>{props.text}</a>
        </li>
    );
};

MenuItem.propTypes = {
    text: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    active: PropTypes.bool,
};

export default MenuItem;