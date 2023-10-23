import './App.css';
import React from "react";
import { NavBar } from './components/nav-bar';
import { CustomAppBar } from './components/Header';

function App() {
  return (
    <div className="App">
      <CustomAppBar/>
      <div className='div-nav-bar'>
        <NavBar/>
      </div>
    </div>
  );
}

export default App;
