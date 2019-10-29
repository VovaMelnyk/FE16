import React, { PureComponent } from 'react';
import Counter from './Counter/Counter';
import './App.css';
import Todo from './Todo/Todo';

class App extends PureComponent {
  render() {
    return (
      <div className="App-container">
        {/* <Todo /> */}
        <Counter name="user" />
      </div>
    );
  }
}

export default App;
