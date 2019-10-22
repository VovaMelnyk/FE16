import React, { PureComponent } from 'react';
import Counter from './Counter/Counter';
import './App.css';

class App extends PureComponent {
  render() {
    return (
      <div className="App-container">
        <Counter name="user" />
      </div>
    );
  }
}

export default App;
