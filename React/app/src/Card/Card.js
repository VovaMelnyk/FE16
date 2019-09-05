import React from 'react';
import {TiHomeOutline} from 'react-icons/ti';
import {MdInfoOutline} from 'react-icons/md';
import {IoIosMan, IoIosStats} from 'react-icons/io';
import './Card.css';

let data = {
    icon: <IoIosStats/>,
    title: 'Used Space',
    value: '49/50 GB',
    footerText: 'Get more space',
    className: 'card__green'
}

const Card = () => {
    return (
        <div className='card'>
            <div className='card__body'>
                <div className='card__icon-container'>
                 {data.icon}
                </div>
                <div className='card__content'>
                    {data.title}
                    {data.value}
                </div>
            </div>
            <div className='card__footer'>
                {data.footerText}
            </div>
        </div>
    );
};

export default Card;

let cardData = [{
    title: 'Used Space',
    value: '49/50 GB',
    footerText: 'Get more space'
},
{
    title: 'Revenue',
    value: '$34,245',
    footerText: 'Last 24 Hours'
}, 
{
    title: 'Fixed Issues',
    value: '75',
    footerText: 'Tracked from Github'
},
{
    title: 'Followers',
    value: '+245',
    footerText: 'Just Updated'
}]
