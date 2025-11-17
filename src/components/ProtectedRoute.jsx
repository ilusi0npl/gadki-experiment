import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Login } from './Login';

export const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    // Pokazuj loader podczas sprawdzania stanu autentykacji
    return (
      <div className="min-h-screen bg-beige-200 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-gadkidarkred border-t-transparent"></div>
          <p className="mt-4 font-lato text-gray-600">Ładowanie...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Login />;
  }

  return children;
};
