import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const ProtectedRoute = ({ element }) => {
  const { signed } = useAuth();

  if (!signed) {
    return <Navigate to="/login" replace />;
  }

  return element;
};

export default ProtectedRoute;
