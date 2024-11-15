// src/components/admin/category/CategoryListHeader.jsx
import React from "react";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

const CategoryListHeader = () => {
  return (
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-semibold">Categories</h2>
      <Link
        to="/admin/categories/add"
        className="flex items-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        <Plus size={18} className="mr-2" />
        Add Category
      </Link>
    </div>
  );
};

export default CategoryListHeader;
