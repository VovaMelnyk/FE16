import React, { Component } from 'react';
import './Red.css';
import { AppContext } from '../../Context/Context';
import Blue from '../Blue/Blue';

class Red extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {context => (
          <div className="RedWrapper">
            {context.number}
            <Blue />
          </div>
        )}
      </AppContext.Consumer>
    );
  }
}
export default Red;
