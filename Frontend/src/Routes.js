import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import Inicio from "./pages/Inicio";
import Jogos from "./pages/Jogos";
import Perfil from "./pages/Perfil";
import Amigos from "./pages/Amigos"
import MeusJogos from "./pages/MeusJogos"
import AdicionarJogo from "./pages/AdicionarJogo"
import CadastroValorant from "./pages/CadastroValorant"
import ProcurarJogadores from "./pages/ProcurarJogadores";
import useAuth from "./hooks/useAuth";

const AppRoutes = () => {
  const { signed } = useAuth();



  const ProtectedRoute = ({ path, element }) => {
    return signed ? element : <Navigate to="/login" replace />;
  };

  const GuestRoute = ({ path, element }) => {
    return signed ? <Navigate to="/inicio" replace /> : element;
  };

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/cadastro" element={<GuestRoute path="/cadastro" element={<Cadastro />} />} />
      <Route path="/login" element={<GuestRoute path="/login" element={<Login />} />} />
      <Route path="/inicio" element={<ProtectedRoute path="/inicio" element={<Inicio />} />} />
      <Route path="/jogos" element={<ProtectedRoute path="/jogos" element={<Jogos />} />} />
      <Route path="/jogos/valorant" element={<ProtectedRoute path="/jogos/valorant" element={<ProcurarJogadores />} />} />
      <Route path="/perfil" element={<ProtectedRoute path="/perfil" element={<Perfil />} />} />
      <Route path="/amigos" element={<ProtectedRoute path="/amigos" element={<Amigos />} />} />
      <Route path="/meus-jogos" element={<ProtectedRoute path="/meus-jogos" element={<MeusJogos />} />} />
      <Route path="/adicionar-jogo" element={<ProtectedRoute path="/adicionar-jogo" element={<AdicionarJogo />} />} />
      <Route path="/adicionar-jogo/valorant" element={<ProtectedRoute path="/adicionar-jogo/valorant" element={<CadastroValorant />} />} />
    </Routes>
  );
};

export default AppRoutes;
