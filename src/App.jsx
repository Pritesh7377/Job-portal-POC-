// src/App.jsx
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

import CandidateDashboard from './dashboards/CandidateDashboard';
import CompanyDashboard from './dashboards/CompanyDashboard';
import AdminDashboard from './dashboards/AdminDashboard';
import JobDetails from './pages/JobDetails';
import Applications from './pages/Applications';
import Profile from './pages/Profile';
import AppNavbar from './components/Navbar';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState(null);

  function handleLogin(newRole) {
    setIsLoggedIn(true);
    setRole(newRole);
  }
  function handleLogout() {
    setIsLoggedIn(false);
    setRole(null);
  }

  return (
    <BrowserRouter>
      <AppNavbar isLoggedIn={isLoggedIn} role={role} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={
          <Login onLogin={handleLogin} />
        } />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard/candidate" element={<CandidateDashboard />} />
        <Route path="/dashboard/company" element={<CompanyDashboard />} />
        <Route path="/dashboard/admin" element={<AdminDashboard />} />
        <Route path="/jobs/:id" element={<JobDetails />} />
        <Route path="/applications" element={<Applications />} />
        
        <Route path="/profile" element={<Profile role={role} />} />

      </Routes>
    </BrowserRouter>
  );
}
