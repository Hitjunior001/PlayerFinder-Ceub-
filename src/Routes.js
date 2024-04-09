import React from "react";
import { Routes, Route } from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import Perfil from "./pages/Perfil"

// eslint-disable-next-line
export default () => {
    return (
            <Routes>
                <Route exact path="/cadastro" element={<Cadastro />}  />
                <Route exact path="/login" element={<Login />}  />
                <Route exact path="/perfil" element={<Perfil />}  />
            </Routes>
    );
}