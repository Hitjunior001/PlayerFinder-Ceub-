import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import Inicio from "./pages/Inicio";
import Jogos from "./pages/Jogos";
import Perfil from "./pages/Perfil/perfil";
import ProfilePage from "./pages/Perfil/index";
import Amigos from "./pages/Amigos";
import MeusJogos from "./pages/MeusJogos";
import AdicionarJogo from "./pages/AdicionarJogo";
import CadastroValorant from "./pages/CadastroValorant";
import ProcurarJogadores from "./pages/ProcurarJogadores";
import useAuth from "./hooks/useAuth";

const AppRoutes = () => {
  const { signed } = useAuth();

  const ProtectedRoute = ({ element }) => {
    return signed ? element : <Navigate to="/login" replace />;
  };

  const GuestRoute = ({ element }) => {
    return signed ? <Navigate to="/inicio" replace /> : element;
  };

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/cadastro" element={<GuestRoute element={<Cadastro />} />} />
      <Route path="/login" element={<GuestRoute element={<Login />} />} />
      <Route path="/inicio" element={<ProtectedRoute element={<Inicio />} />} />
      <Route path="/jogos" element={<ProtectedRoute element={<Jogos />} />} />
      <Route path="/jogos/valorant" element={<ProtectedRoute element={<ProcurarJogadores />} />} />
      <Route path="/perfil" element={<ProtectedRoute element={<ProfilePage />} />} />
      <Route path="/perfil/:username" element={<ProtectedRoute element={<Perfil />} />} />
      <Route path="/amigos" element={<ProtectedRoute element={<Amigos />} />} />
      <Route path="/meus-jogos" element={<ProtectedRoute element={<MeusJogos />} />} />
      <Route path="/adicionar-jogo" element={<ProtectedRoute element={<AdicionarJogo />} />} />
      <Route path="/adicionar-jogo/valorant" element={<ProtectedRoute element={<CadastroValorant />} />} />
    </Routes>
  );
};

export default AppRoutes;
