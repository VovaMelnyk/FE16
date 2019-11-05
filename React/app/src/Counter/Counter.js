import React from 'react';
import { connect } from 'react-redux';
import { reset, increment, decrement } from '../redux/actions/counterActions';
import { fetchData } from '../redux/actions/collectionAction';
import { fetchUser } from '../redux/actions/userActions';
import { fetchUsers } from '../redux/actions/UsersAction';
import './Counter.css';

class Counter extends React.Component {
  plus = () => {
    const { increment } = this.props;
    increment(4);
  };

  render() {
    const {
      counter,
      reset,
      decrement,
      increment,
      fetchData,
      fetchUser,
      fetchUsers,
    } = this.props;
    return (
      <div id="counter-app">
        <div id="display-container" className="container">
          <p id="display">{counter}</p>
        </div>
        <div id="buttons-container" className="container">
          <button
            id="increment-button"
            className="button"
            type="button"
            onClick={this.plus}
          >
            <i className="fa fa-plus" />
          </button>
          <button
            id="decrement-button"
            className="button"
            type="button"
            onClick={decrement}
          >
            <i className="fa fa-minus" />
          </button>
          <button
            id="reset-button"
            className="button"
            type="button"
            onClick={reset}
          >
            <i className="fa fa-refresh" />
          </button>
          {/* <button className="button" onClick={getCollectionAsync}>
            Fetch
          </button> */}
          <button
            className="button"
            onClick={fetchUsers}
            type="button"
            id="reset-button"
          >
            Saga
          </button>

          <button
            className="button"
            onClick={() => fetchUser(1)}
            type="button"
            id="increment-button"
          >
            User
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ counter, collection }) => {
  return {
    counter,
    collection,
  };
};

const mapDispatchToProps = {
  reset,
  increment,
  decrement,
  fetchUsers,
  fetchUser,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);
