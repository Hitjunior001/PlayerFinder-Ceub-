import "./App.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";

import { CustomAppBar } from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="App" style={{ height: "100vh", textAlign: "center", backgroundColor: "#202020"}}>

        <CustomAppBar />
        <Routes/>

      </div>
    </BrowserRouter>
  );
}

export default App;
