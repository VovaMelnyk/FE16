import React, { PureComponent } from 'react';
import Green from '../Green/Green';
import './Blue.css';
import { AppContext } from '../../Context/Context';

class Blue extends PureComponent {
  render() {
    return (
      <AppContext.Consumer>
        {context => (
          <div className="BlueWrapper">
            <button onClick={context.increment}>increment</button>
            <Green />
          </div>
        )}
      </AppContext.Consumer>
    );
  }
}

export default Blue;
