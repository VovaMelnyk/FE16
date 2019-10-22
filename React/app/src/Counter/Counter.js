import React from 'react';
import { connect } from 'react-redux';
import { reset, increment, decrement } from '../redux/actions/counterActions';
import './Counter.css';

class Counter extends React.Component {
  // state = {
  //   count: 0,
  // };

  // increment = () => {
  //   this.setState(prevState => ({
  //     count: prevState.count + 1,
  //   }));
  // };

  // decrement = () => {
  //   this.setState(prevState => {
  //     return {
  //       count: prevState.count - 1,
  //     };
  //   });
  // };

  // reset = () => {
  //   this.setState({
  //     count: 0,
  //   });
  // };

  // plus = () => {
  //   this.props.increment(5);
  // };

  plus = () => {
    const { increment } = this.props;
    increment(4);
  };

  render() {
    const { counter, reset, decrement, increment } = this.props;
    console.log(this.props);
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
        </div>
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     counter: state.counter,
//     collection: state.collection,
//   };
// }

const mapStateToProps = ({ counter, collection }) => {
  return {
    counter,
    collection,
  };
};

// const mapStateToProps = ({ counter, collection }) => ({
//   counter,
//   collection,
// });

// function mapDispatchToProps(dispatch) {
//   return {
//     reset: () => dispatch(reset()),
//     increment: number => dispatch(increment(number)),
//     decrement: () => dispatch(decrement()),
//   };
// }

const mapDispatchToProps = {
  reset,
  increment,
  decrement,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);

// const mapStateToProps = state => ({
//   counter: state.counter,
// });

// // const mapStateToProps = ({ counter }) => ({
// //   counter,
// // });

// // const mapDispatchToProps = dispatch => ({
// //   increment: val => dispatch(increment(val)),
// //   decrement: () => dispatch(decrement()),
// //   reset: () => dispatch(reset()),
// // });

// const mapDispatchToProps = {
//   increment,
//   decrement,
//   reset,
// };
