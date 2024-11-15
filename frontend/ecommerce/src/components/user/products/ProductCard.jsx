import { Heart, Maximize2, BarChart2 } from 'lucide-react'

export default function ProductCard({ 
  image, 
  title, 
  brand, 
  price, 
  originalPrice, 
  discount,
  rating = 0
}) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 relative group">
      {discount && (
        <div className="absolute top-4 left-4 bg-purple-700 text-white text-sm px-2 py-1 rounded-full">
          -{discount}%
        </div>
      )}
      
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-contain mb-4" />
        <div className="absolute top-0 right-0 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="bg-white p-2 rounded-full shadow hover:bg-purple-700 hover:text-white">
            <BarChart2 className="h-4 w-4" />
          </button>
          <button className="bg-white p-2 rounded-full shadow hover:bg-purple-700 hover:text-white">
            <Maximize2 className="h-4 w-4" />
          </button>
          <button className="bg-white p-2 rounded-full shadow hover:bg-purple-700 hover:text-white">
            <Heart className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="font-medium text-sm">{title}</h3>
        <p className="text-gray-500 text-sm">{brand}</p>
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={`text-sm ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            >
              ★
            </span>
          ))}
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-purple-700 font-semibold">₹{price}</span>
          {originalPrice && (
            <span className="text-gray-400 line-through text-sm">₹{originalPrice}</span>
          )}
        </div>
        <button className="w-full py-2 bg-purple-700 text-white rounded hover:bg-purple-800 transition-colors">
          Add To Cart
        </button>
      </div>
    </div>
  )
}