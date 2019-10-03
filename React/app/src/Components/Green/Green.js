import React, { Component } from 'react';
import './Green.css';
import { AppContext } from '../../Context/Context';

class Green extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {context => (
          <div className="GreenWrapper">
            {context.number}
            {/* <button onClick={context.inc}>INC</button> */}
          </div>
        )}
      </AppContext.Consumer>
    );
  }
}

export default Green;
