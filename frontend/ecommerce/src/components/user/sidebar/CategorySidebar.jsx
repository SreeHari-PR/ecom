'use client'

import { useState, useEffect } from 'react'
import axios from 'axios'
import api from '../../../services/api'

export default function CategorySidebar() {
  const [priceRange, setPriceRange] = useState([399, 11100])
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
   
    const fetchCategories = async () => {
      try {
        const response = await api.get('/auth/category/list') 
        setCategories(response.data)
        console.log(response.data)
        setLoading(false)
      } catch (err) {
        setError('Failed to fetch categories')
        setLoading(false)
      }
    }

    fetchCategories()
  }, [])

  return (
    <div className="w-64 p-4">
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Product Categories</h2>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-600">{error}</p>
        ) : (
          <ul className="space-y-2">
            {categories.map((category) => (
              <li key={category}>
                <a href="#" className="text-gray-600 hover:text-purple-700">
                  {category}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-4">Filter By Price</h2>
        <div className="space-y-4">
          <div className="flex space-x-4">
            <input
              type="number"
              value={priceRange[0]}
              onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
              className="w-24 p-2 border rounded"
            />
            <input
              type="number"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
              className="w-24 p-2 border rounded"
            />
          </div>
          <input
            type="range"
            min="399"
            max="11100"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
            className="w-full"
          />
          <div className="flex space-x-4">
            <button className="px-4 py-2 border rounded hover:bg-gray-100">
              Reset
            </button>
            <button className="px-4 py-2 bg-purple-700 text-white rounded hover:bg-purple-800">
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
