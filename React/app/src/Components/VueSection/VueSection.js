import React from 'react';
import PropTypes from 'prop-types';
//import { Test } from './VueSection.styles';

const VueSection = props => (
  <div className="container">
    <h2 className="title">Vue</h2>
    <p className="text">
      Vue Though developed in the year 2016, this JavaScript framework has
      already made its way into the market and has proven its worth by offering
      multifarious features. Its dual integration mode is one of the most
      attractive features for the creation of high-end SPA or Single Page
      Application. It is a much reliable platform for developing cross-platform.
    </p>
  </div>
);

VueSection.propTypes = {
  // bla: PropTypes.string,
};

VueSection.defaultProps = {
  // bla: 'test',
};

export default VueSection;
