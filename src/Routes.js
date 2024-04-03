import React from "react";
import { Router, Routes, Route } from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";

// eslint-disable-next-line
export default () => {
    return (
        // <Switch>
        //     <Route exact path="/cadastro">
        //         <Cadastro/>
        //     </Route>                
        //     <Route exact path="/login">
        //         <Login/>
        //     </Route>                
        // </Switch>
        <Router>
            <Routes>
                <Route path="/cadastro" element={<Cadastro />}  />
                <Route path="/login" element={<Login />}  />
            </Routes>
        </Router>
    );
}