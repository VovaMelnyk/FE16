import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import Main from './Main/Main';
import './App.css';

function App() {
  const navLinks = [
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
  ];

  return (
    <div className="App-container">
      <Sidebar menu={navLinks} />
      <Main />
    </div>
  );
}

export default App;
