import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import Main from './Main/Main';
import './App.css';

class App extends React.Component {
  // const navLinks = [
  //   {
  //     text: 'dashboard',
  //     href: '/dashboard',
  //   },
  //   {
  //     text: 'Site admin',
  //     href: '/admin',
  //   },
  //   {
  //     text: 'Site preview',
  //     href: '/preview',
  //   },
  //   {
  //     text: 'Modals',
  //     href: '/modals',
  //   },
  //   {
  //     text: 'Cart',
  //     href: '/cart',
  //   },
  //   {
  //     text: 'Counter',
  //     href: '/counter',
  //   },
  // ];

  state = {
    isOpen: false,
  };

  toggleModal = () => {
    this.setState(prev => ({
      isOpen: !prev.isOpen,
    }));
  };

  render() {
    const { isOpen } = this.state;
    return (
      <div className="App-container">
        {/* <Sidebar menu={navLinks} /> */}
        <Main isOpen={isOpen} toggleModal={this.toggleModal} />
      </div>
    );
  }
}

export default App;
