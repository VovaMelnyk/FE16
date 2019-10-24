import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { inputChange, clearInput } from '../redux/actions/inputActions';
import { addTask } from '../redux/actions/taskListActions';
import {
  getInputValue,
  getTaskList,
  getTaskListCount,
} from '../redux/selectors';
import TodoItem from '../TodoItem/TodoItem';
//import { Test } from './Todo.styles';

class Todo extends PureComponent {
  formSubmit = e => {
    e.preventDefault();
    const task = {
      id: Date.now(),
      text: this.props.input,
      complete: false,
    };
    this.props.addTask(task);
    this.props.clearInput();
  };

  render() {
    const { input, inputChange, taskList, total } = this.props;
    return (
      <div className="container">
        <form action="" onSubmit={this.formSubmit}>
          <input
            type="text"
            placeholder="Enter task"
            value={input}
            onChange={inputChange}
          />
          <input type="submit" value="Add" />
        </form>
        <ul>
          {taskList.map(el => (
            <TodoItem {...el} />
          ))}
        </ul>
        <p>{total}</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  input: getInputValue(state),
  taskList: getTaskList(state),
  total: getTaskListCount(state),
});

const mapDispatchToProps = {
  inputChange,
  clearInput,
  addTask,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Todo);
