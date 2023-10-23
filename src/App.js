import './App.css';
import React from "react";
import { NavBar } from './components/nav-bar';
import { CustomAppBar } from './components/Header';

function App() {
  return (
    <div className="App">
      <CustomAppBar/>
      <NavBar/>
    </div>
  );
}

export default App;
