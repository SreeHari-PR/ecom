'use client'

import { useState } from 'react'
import { Menu, User, ShoppingCart, Heart, BarChart2 } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-purple-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="h-10 w-10 bg-purple-700 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold">EC</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button className="text-gray-700 hover:text-purple-700 px-3 py-2 flex items-center">
              <Menu className="h-4 w-4 mr-2" />
              All Categories
            </button>
            <a href="#" className="text-gray-700 hover:text-purple-700 px-3 py-2">Deals</a>
            <a href="#" className="text-gray-700 hover:text-purple-700 px-3 py-2">Shop</a>
            <a href="#" className="text-gray-700 hover:text-purple-700 px-3 py-2">Our Contacts</a>
            <a href="#" className="text-gray-700 hover:text-purple-700 px-3 py-2">Stores</a>
          </nav>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-purple-700">
              <User className="h-6 w-6" />
            </button>
            <button className="text-gray-700 hover:text-purple-700 relative">
              <BarChart2 className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 bg-purple-700 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                0
              </span>
            </button>
            <button className="text-gray-700 hover:text-purple-700 relative">
              <Heart className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 bg-purple-700 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                0
              </span>
            </button>
            <button className="text-gray-700 hover:text-purple-700 flex items-center">
              <ShoppingCart className="h-6 w-6" />
              <span className="ml-2">₹0.00</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}