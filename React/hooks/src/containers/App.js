import React, { PureComponent } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "../components/Header/Header";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import Login from "../components/Login/Login";
import Home from "../components/Home/Home";
import Registration from "../components/Registration/Registration";

class App extends PureComponent {
  render() {
    return (
      <div className="App-container">
        <Header />
        <Switch>
          {/* <PrivateRoute exact path="/" component={Home} /> */}
          <PrivateRoute exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/registration" component={Registration} />
        </Switch>
      </div>
    );
  }
}

export default App;
