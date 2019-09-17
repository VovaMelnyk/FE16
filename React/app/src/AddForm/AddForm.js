import React from 'react';
import PropTypes from 'prop-types';
import './AddForm.css';

const AddForm = ({
  toggleForm,
  color,
  price,
  caption,
  inputChange,
  formSubmit,
}) => (
  <form className="form" onSubmit={formSubmit}>
    <input
      type="text"
      placeholder="Caption"
      value={caption}
      name="caption"
      onChange={inputChange}
    />
    <input
      type="text"
      placeholder="Color"
      value={color}
      name="color"
      onChange={inputChange}
    />
    <input
      type="text"
      placeholder="Price"
      value={price}
      name="price"
      onChange={inputChange}
    />
    <div>
      <button className="chancel" type="button" onClick={toggleForm}>
        Close
      </button>
      <button type="submit" className="save">
        Add
      </button>
    </div>
  </form>
);

AddForm.propTypes = {
  // bla: PropTypes.string,
};

AddForm.defaultProps = {
  // bla: 'test',
};

export default AddForm;
