import React from 'react';
import PropTypes from 'prop-types';
import './NewsItem.css';

const NewsItem = ({ webTitle }) => (
  <li className="item">
    <h2 className="item__title">{webTitle}</h2>
    <p className="item__text"></p>
  </li>
);

NewsItem.propTypes = {
  // bla: PropTypes.string,
};

NewsItem.defaultProps = {
  // bla: 'test',
};

export default NewsItem;
