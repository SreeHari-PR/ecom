// src/pages/AddProduct.js

import React, { useState } from "react";
import ProductForm from "../../components/admin/product/ProductForm";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    description: "",
    price: "",
    discount: 0,
    category: "",
    rating: 0,
    numReviews: 0,
    images: [],
    stock: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData({ ...formData, images: files });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product added:", formData);
    // Handle form submission logic here, e.g., API request
  };

  return (
    <div className="container mx-auto py-6">
      <h2 className="text-2xl font-semibold mb-4">Add Product</h2>
      <ProductForm
        formData={formData}
        handleChange={handleChange}
        handleFileChange={handleFileChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default AddProduct;
