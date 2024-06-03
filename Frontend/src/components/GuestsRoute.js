import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const GuestRoute = ({ element }) => {
  const { signed } = useAuth();

  if (signed) {
    return <Navigate to="/inicio" replace />;
  }

  return element;
};

export default GuestRoute;
