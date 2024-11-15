'use client'

import { useState } from 'react'
import { Grid, List, Grid3X3 } from 'lucide-react'
import ProductCard from './ProductCard'

export default function ProductGrid() {
  const [viewMode, setViewMode] = useState(12)
  const [sortBy, setSortBy] = useState('popularity')

  const products = [
    {
      id: 1,
      image: "/placeholder.svg?height=200&width=200",
      title: "GadPro Flash Series Two-for-Three Data Cable",
      brand: "GADPRO",
      price: "499.00",
      originalPrice: "890.00",
      discount: 44,
      rating: 0
    },
    {
      id: 2,
      image: "/placeholder.svg?height=200&width=200",
      title: "Dr Vaku Clear Bolt 10000 mAh Powerbank 20W Fast",
      brand: "Dr Vaku",
      price: "1,349.00",
      originalPrice: "2,700.00",
      discount: 50,
      rating: 5
    },
    {
      id: 3,
      image: "/placeholder.svg?height=200&width=200",
      title: "LDNIO Z4 6AMAX Universal Plug (ABS V0)",
      brand: "LDNIO",
      price: "399.00",
      originalPrice: "799.00",
      discount: 50,
      rating: 0
    },
    {
      id: 4,
      image: "/placeholder.svg?height=200&width=200",
      title: "JBL Tune 205BT by Harman Wireless Earbud",
      brand: "JBL",
      price: "1,999.00",
      originalPrice: "2,999.00",
      discount: 33,
      rating: 0
    }
  ]

  return (
    <div className="flex-1 p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Mobile Accessories</h1>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Show:</span>
            <select 
              value={viewMode}
              onChange={(e) => setViewMode(Number(e.target.value))}
              className="border rounded p-1"
            >
              <option value={9}>9</option>
              <option value={12}>12</option>
              <option value={18}>18</option>
              <option value={24}>24</option>
            </select>
          </div>
          <div className="flex space-x-2">
            <button className="p-1 hover:text-purple-700">
              <List className="h-5 w-5" />
            </button>
            <button className="p-1 hover:text-purple-700">
              <Grid className="h-5 w-5" />
            </button>
            <button className="p-1 hover:text-purple-700">
              <Grid3X3 className="h-5 w-5" />
            </button>
          </div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border rounded p-1"
          >
            <option value="popularity">Sort by popularity</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="newest">Newest First</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  )
}