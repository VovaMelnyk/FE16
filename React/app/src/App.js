import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import Main from './Main/Main';
import './App.css';
import AddForm from './AddForm/AddForm';

class App extends React.Component {
  state = {
    navLinks: [
      {
        text: 'dashboard',
        href: '/dashboard',
      },
      {
        text: 'Site admin',
        href: '/admin',
      },
      {
        text: 'Site preview',
        href: '/preview',
      },
      {
        text: 'Modals',
        href: '/modals',
      },
      {
        text: 'Cart',
        href: '/cart',
      },
      {
        text: 'Counter',
        href: '/counter',
      },
      { text: 'Prev', href: '/prev' },
    ],
    isFormModalShow: false,
  };

  toggleForm = () => {
    this.setState(prev => ({
      isFormModalShow: !prev.isFormModalShow,
    }));
  };

  render() {
    const { navLinks, isFormModalShow } = this.state;
    return (
      <div className="App-container">
        <Sidebar menu={navLinks} />
        <Main toggleForm={this.toggleForm} isFormModalShow={isFormModalShow} />
      </div>
    );
  }
}

export default App;
