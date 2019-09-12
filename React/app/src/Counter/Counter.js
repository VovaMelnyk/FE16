import React from 'react';
// import PropTypes from 'prop-types';
import './Counter.css';

const Counter = () => (
  <div id="counter-app">
    <div id="display-container" className="container">
      <p id="display">0</p>
    </div>
    <div id="buttons-container" className="container">
      <button id="increment-button" className="button" type="button">
        <i className="fa fa-plus" />
      </button>
      <button id="decrement-button" className="button" type="button">
        <i className="fa fa-minus" />
      </button>
      <button id="reset-button" className="button" type="button">
        <i className="fa fa-refresh" />
      </button>
    </div>
  </div>
);

Counter.propTypes = {
  // bla: PropTypes.string,
};

Counter.defaultProps = {
  // bla: 'test',
};

export default Counter;
