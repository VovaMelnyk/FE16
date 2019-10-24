import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteTask } from '../redux/actions/taskListActions';
//import { Test } from './TodoItem.styles';

const TodoItem = ({ id, text, deleteTask }) => {
  const deleteItem = () => {
    deleteTask(id);
  };

  return (
    <li key={id}>
      {text}
      <button onClick={deleteItem}>Delete</button>
    </li>
  );
};

// TodoItem.propTypes = {
//   // bla: PropTypes.string,
// };

// TodoItem.defaultProps = {
//   // bla: 'test',
// };

const mapDispatchToProps = {
  deleteTask,
};

export default connect(
  null,
  mapDispatchToProps,
)(TodoItem);
