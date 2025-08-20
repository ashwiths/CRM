import React from 'react';
import { useAuth } from './AuthContext';
import LoginPage from '../components/LoginPage';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? children : <LoginPage />;
};

export default ProtectedRoute;