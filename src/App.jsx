// src/App.jsx

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '../src/components/AuthProvider'; // Make sure this path is correct

// Import your page components
import HomePage from '../src/components/Home';
import Signup from '../src/components/Signup';
import Login from '../src/components/Login';

function App() {
  return (
    // 1. AuthProvider must wrap your router and all components that use the auth context.
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;