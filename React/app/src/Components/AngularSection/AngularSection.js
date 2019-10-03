import React from 'react';
import PropTypes from 'prop-types';
//import { Test } from './AngularSection.styles';

const AngularSection = props => (
  <div className="container">
    <h2 className="title">Angular</h2>
    <p className="text">
      Angular one of the most powerful, efficient, and open-source JavaScript
      frameworks is Angular. This framework is operated by Google and is
      basically implemented to use for developing Single Page Application (SPA).
      It extends the HTML into the application and interprets the attributes in
      order to perform data binding.
    </p>
  </div>
);

AngularSection.propTypes = {
  // bla: PropTypes.string,
};

AngularSection.defaultProps = {
  // bla: 'test',
};

export default AngularSection;
