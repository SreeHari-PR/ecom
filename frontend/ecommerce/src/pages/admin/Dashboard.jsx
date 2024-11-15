import React from 'react'
import Sidebar from '../../components/admin/sidebar/Sidebar'


function Dashboard() {
    const handleLogout = () => {
       
        alert("Logged out!");
      };
  return (
      <div className="flex">
    
        <Sidebar onLogout={handleLogout} />


        <div className="flex-1">
        <h1>welcome to dashboard</h1>
        </div>
      </div>
  )
}

export default Dashboard