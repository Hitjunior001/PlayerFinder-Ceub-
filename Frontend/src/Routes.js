import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import Inicio from "./pages/Inicio";
import Perfil from "./pages/Perfil";
import Jogos from "./pages/Jogos";
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
    </Routes>
  );
};

export default AppRoutes;
