// src/components/admin/category/CategoryItem.jsx
import React from "react";
import { Trash, Edit } from "lucide-react";

const CategoryItem = ({ category, onEdit, onDelete }) => {
  return (
    <div className="flex items-center justify-between bg-white p-4 rounded shadow hover:bg-gray-50">
      <div>
        <h3 className="font-semibold text-lg">{category.name}</h3>
        <p className="text-sm text-gray-600">{category.description}</p>
      </div>
      <div className="flex space-x-2">
        <button
          onClick={() => onEdit(category.id)}
          className="p-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          <Edit size={16} />
        </button>
        <button
          onClick={() => onDelete(category.id)}
          className="p-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          <Trash size={16} />
        </button>
      </div>
    </div>
  );
};

export default CategoryItem;
