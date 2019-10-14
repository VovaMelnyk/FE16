import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import './SimpleAnimation.css';

class SimpleAnimation extends Component {
  state = {
    showList: false,
  };

  switch = () => {
    this.setState(prevState => ({
      showList: !prevState.showList,
    }));
  };

  render() {
    return (
      <div className="container">
        <button className="display" onClick={this.switch}>
          List
        </button>
        {/* {this.state.showList && (
          <div className="menu">
            <ul className="list">
              <li className="list-item">Feed the dog</li>
              <li className="list-item">Cut hair</li>
              <li className="list-item">Do the dishs</li>
              <li className="list-item">Buy grossries</li>
            </ul>
          </div>
        )} */}

        <CSSTransition
          in={this.state.showList}
          timeout={400}
          classNames="list-transition"
          unmountOnExit
          appear
        >
          <div className="list-body">
            <ul className="list">
              <li className="list-item">Writing JavaScript</li>
              <li className="list-item"> Running</li>
              <li className="list-item"> Technical Writing</li>
              <li className="list-item"> Writing Clean code</li>
            </ul>
          </div>
        </CSSTransition>
      </div>
    );
  }
}

export default SimpleAnimation;
