import React from "react";
import { Link } from "react-router-dom";
import { Box, ShoppingCart, List, LogOut } from "lucide-react";

const Sidebar = ({ onLogout }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-800 text-white">
      <div className="flex items-center justify-center p-4 bg-gray-900">
        <h2 className="text-xl font-semibold">Admin Dashboard</h2>
      </div>
      <nav className="flex-1">
        <ul className="space-y-4 p-4">
          {/* Products Link */}
          <li>
            <Link
              to="/admin/products"
              className="flex items-center space-x-2 text-lg hover:bg-gray-700 p-2 rounded-md"
            >
              <Box size={20} />
              <span>Products</span>
            </Link>
          </li>
          
          {/* Categories Link */}
          <li>
            <Link
              to="/admin/categories"
              className="flex items-center space-x-2 text-lg hover:bg-gray-700 p-2 rounded-md"
            >
              <List size={20} />
              <span>Categories</span>
            </Link>
          </li>

          {/* Orders Link */}
          <li>
            <Link
              to="/admin/orders"
              className="flex items-center space-x-2 text-lg hover:bg-gray-700 p-2 rounded-md"
            >
              <ShoppingCart size={20} />
              <span>Orders</span>
            </Link>
          </li>

          {/* Logout Link */}
          <li>
            <button
              onClick={onLogout}
              className="flex items-center space-x-2 text-lg hover:bg-gray-700 p-2 rounded-md w-full text-left"
            >
              <LogOut size={20} />
              <span>Logout</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
