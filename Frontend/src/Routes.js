import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
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
import Dashboard from "./pages/Dashboard";
import useAuth from './hooks/useAuth';

// import ProtectedRoute from "./components/protectRoute";

const ProtectedRoute = ({ element }) => {
  const { signed } = useAuth();
  const location = useLocation();

  return signed ? element : <Navigate to="/login" replace state={{ from: location }} />;
};

const GuestRoute = ({ element }) => {
  const { signed } = useAuth();
  const location = useLocation();

  return signed ? <Navigate to="/inicio" replace state={{ from: location }} /> : element;
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/cadastro"  element={<GuestRoute element={<Cadastro />} />} />
      <Route path="/login" element={<GuestRoute element={<Login />} />} />
      <Route path="/inicio" element={<ProtectedRoute element={<Inicio />} />} />
      <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
      <Route path="/jogos" element={<ProtectedRoute element={<Jogos />} />} />
      <Route path="/jogos/:jogoId" element={<ProtectedRoute element={<ProcurarJogadores />} />} />
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
