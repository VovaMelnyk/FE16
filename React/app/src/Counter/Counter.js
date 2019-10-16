import React from 'react';
import './Counter.css';

class Counter extends React.Component {
  state = {
    count: 0,
  };

  increment = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  };

  decrement = async () => {
    await this.setState(prevState => {
      return {
        count: prevState.count - 1,
      };
    });
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
