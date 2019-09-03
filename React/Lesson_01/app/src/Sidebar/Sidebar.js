import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
    let status = false;
    return (
        <div className='sidebar'>
            { status ? 'Sidebar' : 'Menu' }
        </div>
    );
};

export default Sidebar;