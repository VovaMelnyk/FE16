import React from 'react';
import PropTypes from 'prop-types';
//import { Test } from './ReactSection.styles';

const ReactSection = props => (
  <div className="container">
    <h2 className="title">React</h2>
    <p className="text">
      Created by Facebook, React framework has earned popularity within a short
      period of time. In fact, it is used to develop and operate the dynamic
      User Interface of the web pages with high incoming traffic. It makes the
      use of a virtual DOM and hence, the integration of the same with any
      application is easier.
    </p>
  </div>
);

ReactSection.propTypes = {
  // bla: PropTypes.string,
};

ReactSection.defaultProps = {
  // bla: 'test',
};

export default ReactSection;
