import React from 'react';
import { connect } from 'react-redux';
import { reset, increment, decrement } from '../redux/actions/counterActions';
import { getCollectionAsync } from '../redux/actions/collectionAction';
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
      getCollectionAsync,
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
          <button className="button" onClick={getCollectionAsync}>
            Fetch
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
  getCollectionAsync,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);
