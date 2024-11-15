// src/components/ProductForm.js

import React from "react";
import { Save, X } from "lucide-react";

const ProductForm = ({ formData, handleChange, handleFileChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <div className="mb-4">
        <label className="block text-gray-700">Product Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Brand</label>
        <input
          type="text"
          name="brand"
          value={formData.brand}
          onChange={handleChange}
          className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="4"
        ></textarea>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Price</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Discount (%)</label>
        <input
          type="number"
          name="discount"
          value={formData.discount}
          onChange={handleChange}
          className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Category</label>
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Rating</label>
        <input
          type="number"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          min="0"
          max="5"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Number of Reviews</label>
        <input
          type="number"
          name="numReviews"
          value={formData.numReviews}
          onChange={handleChange}
          className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          min="0"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Stock</label>
        <input
          type="number"
          name="stock"
          value={formData.stock}
          onChange={handleChange}
          className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          min="0"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Images</label>
        <input
          type="file"
          name="images"
          onChange={handleFileChange}
          className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          multiple
        />
      </div>

      <div className="flex justify-between">
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700"
        >
          <Save size={18} className="mr-2" />
          Save
        </button>
        <button
          type="button"
          className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg flex items-center hover:bg-gray-400"
        >
          <X size={18} className="mr-2" />
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
