import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

export const Login = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(password);

    if (!success) {
      setError('Nieprawidłowe hasło');
      setPassword('');
    }
  };

  return (
    <div className="min-h-screen bg-beige-200 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        {/* Logo */}
        <div className="text-center mb-8">
          <img
            src="https://c.animaapp.com/mhyvw56jKmrjx6/img/layer-2.svg"
            alt="GADKI Logo"
            className="h-20 mx-auto mb-4"
          />
          <h1 className="font-happy-season text-4xl text-gadkidarkred mb-2">
            GADKI
          </h1>
          <p className="font-lato text-gray-600">
            Wpisz hasło aby uzyskać dostęp
          </p>
        </div>

        {/* Formularz logowania */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block font-lato font-semibold text-gray-700 mb-2"
              >
                Hasło
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError('');
                }}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-gadkidarkred font-lato"
                placeholder="Wpisz hasło"
                autoFocus
              />
              {error && (
                <p className="mt-2 text-gadkidarkred font-lato text-sm">
                  {error}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-gadkidarkred hover:bg-opacity-90 text-white font-lato font-bold py-3 px-4 rounded-lg transition-all duration-200"
            >
              Zaloguj się
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="font-lato text-sm text-gray-500">
              Strona w wersji demonstracyjnej
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
