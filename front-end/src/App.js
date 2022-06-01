import React from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
// import rockGlass from './images/rockGlass.svg';
import LoginPage from './pages/login';

function App() {
  return (
    <Routes className="App">
      <Route exact path="/login" element={ <LoginPage /> } />
      <Route exact path="/" element={ <Navigate to="/login" /> } />
      {/* <span className="logo">TRYBE</span> */}
      {/* <object className="rocksGlass" type="image/svg+xml" data={ rockGlass }>
        Glass
      </object> */}
    </Routes>
  );
}

export default App;
