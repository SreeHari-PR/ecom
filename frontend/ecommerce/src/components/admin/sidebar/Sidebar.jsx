import React, { useState } from "react";
import { Link } from "react-router-dom"; // Use Link for navigation
import { Box, ShoppingCart, List, LogOut, ChevronDown, ChevronRight } from "lucide-react";

const Sidebar = ({ onLogout }) => {
  const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);
  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gray-800 text-white">
      {/* Sidebar Header */}
      <div className="flex items-center justify-center p-4 bg-gray-900">
        <h2 className="text-xl font-semibold">Admin Dashboard</h2>
      </div>

      {/* Sidebar Links */}
      <nav className="flex-1">
        <ul className="space-y-4 p-4">
          {/* Products Menu */}
          <li>
            <div
              className="flex items-center justify-between cursor-pointer text-lg hover:bg-gray-700 p-2 rounded-md"
              onClick={() => setIsProductMenuOpen(!isProductMenuOpen)}
            >
              <div className="flex items-center space-x-2">
                <Box size={20} />
                <span>Products</span>
              </div>
              {isProductMenuOpen ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
            </div>
            {isProductMenuOpen && (
              <ul className="ml-6 mt-2 space-y-2">
                <li>
                  <Link
                    to="/admin/products/add"
                    className="text-sm hover:bg-gray-700 p-2 rounded-md block"
                  >
                    Add Product
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/products/list"
                    className="text-sm hover:bg-gray-700 p-2 rounded-md block"
                  >
                    Product List
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Categories Menu */}
          <li>
            <div
              className="flex items-center justify-between cursor-pointer text-lg hover:bg-gray-700 p-2 rounded-md"
              onClick={() => setIsCategoryMenuOpen(!isCategoryMenuOpen)}
            >
              <div className="flex items-center space-x-2">
                <List size={20} />
                <span>Categories</span>
              </div>
              {isCategoryMenuOpen ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
            </div>
            {isCategoryMenuOpen && (
              <ul className="ml-6 mt-2 space-y-2">
                <li>
                  <Link
                    to="/admin/categories/add"
                    className="text-sm hover:bg-gray-700 p-2 rounded-md block"
                  >
                    Add Category
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/categories/list"
                    className="text-sm hover:bg-gray-700 p-2 rounded-md block"
                  >
                    Category List
                  </Link>
                </li>
              </ul>
            )}
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
