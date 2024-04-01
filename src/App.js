import './App.css';
import React from "react";
import { CustomAppBar } from './components/Header';
import { Login } from './components/login';

function App() {
  return (
    <div className="App" style={{height:"100vh", textAlign:"center", backgroundColor:"#202020"}}>
      <CustomAppBar/>
      <Login/>
    </div>
  );
}

export default App;
