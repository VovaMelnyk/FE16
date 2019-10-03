import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import Html from '../../Components/Html/Html';
import Css from '../../Components/Css/Css';
import Javascript from '../../Components/Javascript/Javascript';
import Frameworks from '../../Components/Frameworks/Frameworks';
import './App.css';

class App extends React.Component {
  state = {
    userData: {},
  };

  componentDidMount() {
    fetch('https://randomuser.me/api/')
      .then(res => res.json())
      .then(data =>
        this.setState({
          userData: data.results[0],
        }),
      );
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route component={Html} path="/" exact />
          <Route component={Css} path="/css" />
          <Route
            path="/javascript"
            render={props => (
              <Javascript {...props} userData={this.state.userData} />
            )}
          />
          <Route component={Frameworks} path="/frameworks" />
        </Switch>
        {/* <Html />
        <Css />
        <Javascript />
        <Frameworks /> */}
      </div>
    );
  }
}

export default App;
