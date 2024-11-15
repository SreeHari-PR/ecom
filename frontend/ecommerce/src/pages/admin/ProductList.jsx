// src/pages/ProductList.js

import React, { useState, useEffect } from "react";
import ProductTable from "../../components/admin/product/productTable";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch product data from API
    const fetchProducts = async () => {
      // Replace with your API call logic
      const data = [
        {
          id: 1,
          name: "Product 1",
          brand: "Brand 1",
          price: 100,
          discountedPrice: 90,
          rating: 4.5,
          stock: 10,
        },
        // Add more product data as needed
      ];
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto py-6">
      <h2 className="text-2xl font-semibold mb-4">Product List</h2>
      <ProductTable products={products} />
    </div>
  );
};

export default ProductList;
