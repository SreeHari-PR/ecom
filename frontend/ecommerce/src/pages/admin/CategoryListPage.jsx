// src/pages/admin/CategoryListPage.jsx
import React, { useEffect, useState } from "react";
import CategoryItem from "../../components/admin/category/CategoryItem";
import CategoryListHeader from "../../components/admin/category/CategoryListHeader";
import api from "../../services/api";

const CategoryListPage = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await api.get("/admin/categories/list");
        setCategories(response.data.data);
        console.log(response.data)
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleEdit = (id) => {
    window.location.href = `/admin/categories/edit/${id}`;
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      try {
        await api.delete(`/admin/categories/${id}`);
        setCategories((prevCategories) =>
          prevCategories.filter((category) => category.id !== id)
        );
      } catch (error) {
        console.error("Error deleting category:", error);
      }
    }
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <CategoryListHeader />
      <div className="space-y-4">
        {categories.map((category) => (
          <CategoryItem
            key={category.id}
            category={category}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
        {categories.length === 0 && (
          <p className="text-gray-600">No categories available.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryListPage;
