// components/FormInput.jsx
import React from 'react';
import { Eye, EyeOff } from 'lucide-react';

const FormInput = ({ 
  icon: Icon, 
  type, 
  placeholder, 
  value, 
  onChange, 
  error, 
  id,
  togglePassword,
  isPassword = false 
}) => {
  return (
    <div className="mb-4">
      <div className="relative">
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
          <Icon size={20} />
        </div>
        <input
          type={type}
          id={id}
          className={`w-full px-10 py-3 bg-white border rounded-lg focus:outline-none focus:ring-2 
            ${error ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:ring-blue-200'}`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {isPassword && (
          <button
            type="button"
            onClick={togglePassword}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {type === 'password' ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
};

export default FormInput;