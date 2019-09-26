import React from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Form.styles';

const Form = ({ content, inputChange, formSubmit }) => (
  <form onSubmit={formSubmit}>
    <input type="text" name="content" value={content} onChange={inputChange} />
    <button>Save</button>
  </form>
);

Form.propTypes = {
  // bla: PropTypes.string,
};

Form.defaultProps = {
  // bla: 'test',
};

export default Form;
