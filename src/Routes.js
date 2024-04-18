import React from "react";
import { Routes, Route } from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import Inicio from "./pages/Inicio";
import Perfil from "./pages/Perfil"
import Jogos from "./pages/Jogos"
import ProcurarJogadores from "./pages/ProcurarJogadores"

// eslint-disable-next-line
export default () => {
    return (
            <Routes>
                <Route exact path="/cadastro" element={<Cadastro />}  />
                <Route exact path="/login" element={<Login />}  />
                <Route exact path="" element={<Inicio />}  />
                <Route exact path="/jogos" element={<Jogos />}  />
                <Route exact path="/jogos/valorant" element={<ProcurarJogadores />}  />
                <Route exact path="/perfil" element={<Perfil />}  />
            </Routes>
    );
}