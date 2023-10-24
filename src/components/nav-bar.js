import { SearchBar } from "./search-bar";
import { RadioButtonsCA } from "./radio-btns-CA";
import { CheckboxLabelsEstados } from "./checkbox-estados";
import { Cidades } from "./checkbox-cidades";
import { CheckboxLabelsTech } from "./checkbox-Tech";
import { CheckboxLabelsExp } from "./checkbox-Exp";
import { CheckboxLabelsAtuacao } from "./checkbox-Atuacao";
import { RadioButtonsCnhA } from "./radio-btns-CnhA";
import { RadioButtonsTS } from "./radio-btns-TS";
import { CheckboxLabelsD } from "./checkbox-D";
import { CheckboxLabelsHorario } from "./checkbox-Horario";
import { CheckboxLabelsDH } from "./checkbox-DH";
import React from "react";

export const NavBar = () => {
    return(
        <nav className='nav-bar'>
            <div className='busca'>
                <h2 className="busca-tittle"  style={{marginBottom:"3vh", marginTop:"0vh"}}>Busca Principal</h2>
                <div className="busca-search" style={{marginBottom:"2vh"}}>
                    <SearchBar/>
                </div>
                <div className="busca-radio" style={{marginBottom:"2vh"}}>
                    <RadioButtonsCA/>
                </div>
                <div className="busca-estado" style={{marginBottom:"3vh"}}>
                    <CheckboxLabelsEstados/>
                </div>
                <div className="busca-cidade" style={{marginBottom:"1vh"}}>
                    <Cidades/>
                </div>
            </div>
            <div className='mais-filtros'>
                <h3 className="tittle-nav-bar">Mais filtros</h3>
                <div className="filtros-dropdown-1">
                    <CheckboxLabelsTech/>
                    <CheckboxLabelsExp/>
                    <CheckboxLabelsAtuacao/>
                </div>
                <div className="filtros-radio">
                    <RadioButtonsCnhA/>
                    <RadioButtonsTS/>
                </div>
                <div className="filtros-dropdown-2">
                    <CheckboxLabelsD/>
                    <CheckboxLabelsHorario/>
                    <CheckboxLabelsDH/>
                </div>
            </div>
        </nav>
    )
};