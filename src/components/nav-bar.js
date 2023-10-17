import { SearchBar } from "./search-bar";
import { CheckboxLabelsEstados } from "./checkbox-estados";
import { Cidades } from "./cidades";
import { RadioButtonsCA } from "./radio-btns-CA";
import React from "react";

export const NavBar = () => {
    return(
        <nav className='nav-bar'>
            <div className='busca'>
                <h2 className="tittle-nav-bar">Busca Principal</h2>
                <SearchBar/>
                <CheckboxLabelsEstados/>
                <Cidades/>
                <RadioButtonsCA/>
            </div>
            <div className='mais-filtros'>
                <h3 className="tittle-nav-bar">Mais filtros</h3>
            </div>
        </nav>
    )
};