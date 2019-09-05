import React from 'react';
import classNames from 'classnames/bind';
import style from './Mod.module.css';

let classes = classNames.bind(style);

const Mod = () => {
    console.log(style);
    return (
        <div className={style.main}>
            <h2 className={`${style.title} ${style.white}`}>Sidebar</h2>
            <h3 className={classes({title: true, blue: true})}>Subtitle</h3>
        </div>
    );
};

export default Mod;