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
                
                <div className="busca-estado" style={{marginBottom:"2vh"}}>
                    <CheckboxLabelsEstados/>
                </div>
                
                <div className="busca-cidade">
                    <Cidades/>
                </div>
            </div>
            <div className='mais-filtros'>
                <h3 className="tittle-nav-bar"  style={{marginBottom:"3vh", marginTop:"0vh"}}>Mais filtros</h3>
                
                <div className="filtro-tech" style={{marginBottom:"2vh"}}>
                    <CheckboxLabelsTech/>
                </div>
                
                <div className="filtro-Exp" style={{marginBottom:"2vh"}}>
                    <CheckboxLabelsExp/>
                </div>
                
                <div className="filtro-Atuacao" style={{marginBottom:"2vh"}}>
                    <CheckboxLabelsAtuacao/>
                </div>
                
                <div className="filtro-Cnha" style={{marginBottom:"2vh"}}>
                    <RadioButtonsCnhA/>
                </div>

                <div className="filtro-Cnha" style={{marginBottom:"2vh"}}>
                    <RadioButtonsTS/>
                </div>
                
                <div className="filtro-D" style={{marginBottom:"2vh"}}>
                    <CheckboxLabelsD/>
                </div>
                
                <div className="filtro-Horario" style={{marginBottom:"2vh"}}>
                    <CheckboxLabelsHorario/>
                </div>

                <div className="filtro-DH">
                    <CheckboxLabelsDH/>
                </div>
            </div>
        </nav>
    )
};