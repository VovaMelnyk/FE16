import React from 'react';
import PropTypes from 'prop-types';
import './NewsColection.css';
import NewsItem from '../NewsItem/NewsItem';

const NewsColection = ({ news }) => (
  <ul>
    {news.map(el => (
      <NewsItem {...el} key={el.id} />
    ))}
  </ul>
);

NewsColection.propTypes = {
  // bla: PropTypes.string,
};

NewsColection.defaultProps = {
  // bla: 'test',
};

export default NewsColection;
