// src/components/ProductTable.js

import React from "react";
import { Edit, Trash } from "lucide-react";

const ProductTable = ({ products }) => {
  return (
    <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
      <thead className="bg-gray-100">
        <tr>
          <th className="py-3 px-6 text-left">Product</th>
          <th className="py-3 px-6 text-left">Brand</th>
          <th className="py-3 px-6 text-left">Price</th>
          <th className="py-3 px-6 text-left">Discounted Price</th>
          <th className="py-3 px-6 text-left">Rating</th>
          <th className="py-3 px-6 text-left">Stock</th>
          <th className="py-3 px-6 text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id} className="border-t">
            <td className="py-3 px-6">{product.name}</td>
            <td className="py-3 px-6">{product.brand}</td>
            <td className="py-3 px-6">{product.price}</td>
            <td className="py-3 px-6">{product.discountedPrice}</td>
            <td className="py-3 px-6">{product.rating}</td>
            <td className="py-3 px-6">{product.stock}</td>
            <td className="py-3 px-6 text-center">
              <button className="mr-2 text-blue-600">
                <Edit size={18} />
              </button>
              <button className="text-red-600">
                <Trash size={18} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
