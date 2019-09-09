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
      text: 'user profile',
      href: '/user',
    },
    {
      text: 'notifications',
      href: '/notifications',
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
