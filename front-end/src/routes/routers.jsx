import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from '../pages/login';
import RegisterPage from '../pages/register';

export default function Router() {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={ <Navigate to="/login" /> }
      />
      <Route
        exact
        path="/login"
        element={ <LoginPage /> }
      />
      <Route
        exact
        path="/register"
        element={ <RegisterPage /> }
      />
    </Routes>
  );
}
