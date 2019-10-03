import React from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

const Modal = ({ children, value, close }) => {
  const closeModal = () => {
    close(value);
  };
  return (
    <div className="overlay">
      <div className="modal">
        {children}
        <button className="close" onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  // bla: PropTypes.string,
};

Modal.defaultProps = {
  // bla: 'test',
};

export default Modal;
