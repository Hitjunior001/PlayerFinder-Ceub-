import React from "react";
import { Switch, Route } from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";

export default () => {
    return (
        <Switch>
            <Route exact path="/cadastro">
                <Cadastro/>
            </Route>                
            <Route exact path="/login">
                <Login/>
            </Route>                
        </Switch>
    );
}