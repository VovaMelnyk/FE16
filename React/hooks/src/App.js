import React, { PureComponent } from "react";
import Counter from "../components/Counter/Counter";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "../components/Header/Header";
import Click from "../components/Click/Click";

class App extends PureComponent {
  render() {
    return (
      <div className="App-container">
        <Header />
        <Switch>
          <Route exact path="/" component={Click} />
          <Route path="/counter" component={Counter} />
        </Switch>
      </div>
    );
  }
}

export default App;
