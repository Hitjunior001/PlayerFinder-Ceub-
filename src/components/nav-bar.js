import { SearchBar } from "./search-bar";
import { CheckboxLabels } from "./checkbox-estados";
import { Cidades } from "./cidades";
import { RadioButtons } from "./radio-btns";
import React from "react";

export const NavBar = () => {
    return(
        <nav className='nav-bar'>
            <div className='busca'>
                <h2 className="tittle-nav-bar">Busca Principal</h2>
                <SearchBar/>
                <CheckboxLabels/>
                <Cidades/>
                <RadioButtons/>
            </div>
            <div className='mais-filtros'>
                teste
            </div>
        </nav>
    )
};