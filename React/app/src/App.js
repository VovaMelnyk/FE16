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

  // Mount old

  // constructor() {}

  // UNSAFE_componentWillMount() {
  //   // setState will not trigger an extra rendering
  //   console.log('Willmount');
  // }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   console.log('getDerivedStateFromProps');
  //   return null;
  // }

  // componentDidMount() {
  //   console.log('Didmount');
  // }

  // render() {
  //   //
  // }

  // componentDidMount() {
  //   // trigger an extra rendering
  // }

  // Mount new

  // constructor () {

  // }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('Update');
    return null;
  }

  // render() {
  //   //
  // }

  // componentDidMount() {
  //   // trigger an extra rendering
  // }

  // update old

  // componentWillReceiveProps(nextProps) {}

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');
    return true;
  }

  // componentWillUpdate(nextProps, nextState) {}

  // render() {}

  componentDidUpdate(prevProps, prevState, snapshot) {
    // if (prevProps !== this.props || prevState !== this.state) {
    //   fetch();
    // }

    console.log('DidUpdate');
  }

  // update new

  // static getDerivedStateFromProps(nextProps, prevState) {

  // }

  // shouldComponentUpdate(nextProps, nextState) {

  // }

  // render() {

  // }

  // getSnapshotBeforeUpdate(prevProps, prevState) {}

  // componentDidUpdate(prevProps, prevState, snapshot) {}

  // unmount

  // componentWillUnmount()

  componentDidCatch(error, info) {}

  toggleForm = () => {
    this.setState(prev => ({
      isFormModalShow: !prev.isFormModalShow,
    }));
  };

  render() {
    const { navLinks, isFormModalShow } = this.state;
    console.log('render');
    return (
      <div className="App-container">
        <Sidebar menu={navLinks} toggleForm={this.toggleForm} />
        {isFormModalShow && (
          <Main
            toggleForm={this.toggleForm}
            isFormModalShow={isFormModalShow}
          />
        )}
      </div>
    );
  }
}

export default App;
