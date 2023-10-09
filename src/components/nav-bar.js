import { CheckboxLabels } from "./checkbox-estados";
import { RadioButtons } from "./radio-btns";
import React from "react";

export const NavBar = () => {
    return(
        <nav className='nav-bar'>
            <div className='busca'>
                <CheckboxLabels/>
                <RadioButtons/>
            </div>
            <div className='mais-filtros'>
                teste
            </div>
        </nav>
    )
};