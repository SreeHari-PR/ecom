import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminSignIn from '../../pages/admin/SignIn';
import Dashboard from '../../pages/admin/Dashboard';

function AdminRoutes() {
  return (
    <Router>
    <Routes>
      
        <Route path="/admin/signin" element={<AdminSignIn />} />
        <Route path="/admin/*" element={<Dashboard />} />
      
      </Routes>
      </Router>
  )
}

export default AdminRoutes