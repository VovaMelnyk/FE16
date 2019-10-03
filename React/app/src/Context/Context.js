import React, { Component } from 'react';

export const AppContext = React.createContext();

class AppProvider extends Component {
  state = {
    number: 10,
  };

  inc = () => {
    this.setState(prev => ({
      number: prev.number + 1,
    }));
  };

  render() {
    return (
      <AppContext.Provider value={{ ...this.state, increment: this.inc }}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
export default AppProvider;
