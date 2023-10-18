import { SearchBar } from "./search-bar";
import { RadioButtonsCA } from "./radio-btns-CA";
import { CheckboxLabelsEstados } from "./checkbox-estados";
import { Cidades } from "./cidades";
import { CheckboxLabelsTech } from "./checkbox-Tech";
import { CheckboxLabelsExp } from "./checkbox-Exp";
import { CheckboxLabelsAtuacao } from "./checkbox-Atuacao";
import { RadioButtonsCnhA } from "./radio-btns-CnhA";
import { RadioButtonsTS } from "./radio-btns-TS";
import React from "react";

export const NavBar = () => {
    return(
        <nav className='nav-bar'>
            <div className='busca'>
                <h2 className="busca-tittle">Busca Principal</h2>
                <div className="busca-search">
                    <SearchBar/>
                </div>
                <div className="busca-radio">
                    <RadioButtonsCA/>
                </div>
                <div className="busca-dropdown">
                    <CheckboxLabelsEstados/>
                    <Cidades/>
                </div>
            </div>
            <div className='mais-filtros'>
                <h3 className="tittle-nav-bar">Mais filtros</h3>
                <div className="filtros-dropdown">
                    <CheckboxLabelsTech/>
                    <CheckboxLabelsExp/>
                    <CheckboxLabelsAtuacao/>
                </div>
                <div className="filtros-radio">
                    <RadioButtonsCnhA/>
                    <RadioButtonsTS/>
                </div>
            </div>
        </nav>
    )
};