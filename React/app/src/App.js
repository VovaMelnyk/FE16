import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import Main from './Main/Main';
import './App.css';
import Inline from './Inline/Inline';
import Mod from './Mod/Mod';

function App () {

  let navLinks = [{
    text: 'dashboard',
    href: '/dashboard'
  },
  {
    text: 'user profile',
    href: '/user'
  },
  {
    text: 'notifications',
    href: '/notifications'
  }]

  return (
    <div className='App-container'>
      <Sidebar menu={navLinks}/>
      <Main/>
      {/* <Inline/>
      <Mod/> */}
   </div>
  )
}

export default App;

