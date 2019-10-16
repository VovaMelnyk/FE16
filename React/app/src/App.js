import React from 'react';
import Counter from './Counter/Counter';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App-container">
        <Counter />
      </div>
    );
  }
}

export default App;
