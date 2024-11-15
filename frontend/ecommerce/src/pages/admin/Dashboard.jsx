import React from 'react'
import { Routes, Route } from "react-router-dom";
import Sidebar from '../../components/admin/sidebar/Sidebar'
import AddCategory from '../../components/admin/category/AddCategory';
import CategoryListPage from './CategoryListPage';
import AddProduct from './AddProduct';
import ProductList from './ProductList';
function Dashboard() {
    const handleLogout = () => {
       
        alert("Logged out!");
      };
  return (
    <div className="flex">
    <Sidebar onLogout={handleLogout} />
    <div className="flex-1 p-6">
      <Routes>
      <Route path="dashboard" element={<h1>Welcome to Dashboard</h1>} />
        <Route path="categories/add" element={<AddCategory />} />
        <Route path="categories" element={<CategoryListPage />} />
        <Route path="products/add" element={<AddProduct />} />
        <Route path="products" element={<ProductList />} />

      </Routes>
    </div>
  </div>
  )
}

export default Dashboard