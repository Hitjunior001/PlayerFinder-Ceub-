import './App.css';
import React from "react";
import { NavBar } from './components/nav-bar';
import { CustomAppBar } from './components/Header';
import { ResultList } from './components/results';

function App() {
  return (
    <div className="App">
      <CustomAppBar/>
      <NavBar/>
      {/* <ResultList/> */}
    </div>
  );
}

export default App;
