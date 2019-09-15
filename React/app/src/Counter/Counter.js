import React from 'react';
import './Counter.css';

class Counter extends React.Component {
  state = {
    count: 1,
  };

  increment = () => {
    this.setState(
      prevstate => ({
        count: prevstate.count + 1,
      }),
      () => console.log(this.state),
    );
  };

  decrement = async () => {
    await this.setState(prevstate => {
      return {
        count: prevstate.count - 1,
      };
    });

    console.log(this.state);
  };

  reset = () => {
    this.setState({
      count: 0,
    });
  };

  render() {
    const { count } = this.state;
    return (
      <div id="counter-app">
        <div id="display-container" className="container">
          <p id="display">{count}</p>
        </div>
        <div id="buttons-container" className="container">
          <button
            id="increment-button"
            className="button"
            type="button"
            onClick={this.increment}
          >
            <i className="fa fa-plus" />
          </button>
          <button
            id="decrement-button"
            className="button"
            type="button"
            onClick={this.decrement}
          >
            <i className="fa fa-minus" />
          </button>
          <button
            id="reset-button"
            className="button"
            type="button"
            onClick={this.reset}
          >
            <i className="fa fa-refresh" />
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
