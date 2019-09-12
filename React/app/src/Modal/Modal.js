import React from 'react';
// import PropTypes from 'prop-types';
import './Modal.css';

const Modal = () => (
  <div className="overlay">
    <div className="modal">
      <h2>Title</h2>
      <p>
        lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
        ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
        ipsumlorem ipsumlorem ipsum
      </p>
    </div>
  </div>
);

Modal.propTypes = {
  // bla: PropTypes.string,
};

Modal.defaultProps = {
  // bla: 'test',
};

export default Modal;
