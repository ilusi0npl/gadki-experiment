import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

// Hasło zakodowane w kodzie (możesz zmienić na dowolne inne)
const VALID_PASSWORD = 'gadki2025';

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Sprawdź czy użytkownik jest już zalogowany (localStorage)
    const authToken = localStorage.getItem('gadki_auth');
    if (authToken === 'authenticated') {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const login = (password) => {
    if (password === VALID_PASSWORD) {
      localStorage.setItem('gadki_auth', 'authenticated');
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem('gadki_auth');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
