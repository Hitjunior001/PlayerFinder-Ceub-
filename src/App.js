import './App.css';
import React from "react";
import { NavBar } from './components/nav-bar';
import { CustomAppBar } from './components/Header';
import { ResponsiveMenu } from './components/menu_responsivo';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <div className='div-logo' >
          <img src="logo.png" className="App-logo" alt="logo" />
        </div>
        <div className='div-tittle'>
          <h1 className='tittle'>
            Busca de Candidatos
          </h1>
        </div>
        <div className='div-link'>
          <a href='' className='cadastra-cand'>
            Cadastrar candidato
          </a>
        </div>
      </header> */}
      {/* <div className='div-nav-bar'>
        <NavBar/>
      </div> */}
      <CustomAppBar />
      <ResponsiveMenu />
    </div>
  );
}

export default App;
