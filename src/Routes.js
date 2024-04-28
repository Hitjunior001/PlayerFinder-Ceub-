import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import Inicio from "./pages/Inicio";
import Perfil from "./pages/Perfil";
import Jogos from "./pages/Jogos";
import ProcurarJogadores from "./pages/ProcurarJogadores";
import useAuth from "./hooks/useAuth";

const Private = ({ Item }) => {
  const { signed } = useAuth();
  return signed > 0 ? <Item /> : <Login />;
};

// eslint-disable-next-line
export default () => {
  return (
    <Fragment>
      <Routes>
        <Route path="*" element={<Login />} />
        <Route exact path="/cadastro" element={<Cadastro />} />
        <Route path="/" element={<Login />} />
        <Route exact path="/inicio" element={<Private Item={Inicio} />} />
        <Route exact path="/jogos" element={<Jogos />} />
        <Route exact path="/jogos/valorant" element={<ProcurarJogadores />} />
        <Route exact path="/perfil" element={<Perfil />} />
      </Routes>
    </Fragment>
  );
};
