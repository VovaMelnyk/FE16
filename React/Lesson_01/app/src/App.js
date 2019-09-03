import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import Main from './Main/Main';
import './App.css';

function App () {
  return (
    <div className='container'>
      <Sidebar/>
      <Main/>
   </div>
  )
}

export default App;