import React, { useState } from "react";
import { Mail, Lock } from "lucide-react";
import FormInput from "../../components/admin/signin/FormInput";
import api from "../../services/api";

const AdminSignIn = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await api.post("/admin/signin", formData);
        const data = response.data;

        if (data.status === "success") {
          localStorage.setItem("token", data.token); 
          localStorage.setItem("admin", data.admin); 

          alert("Admin Sign-In successful!");
          window.location.href = "/admin/dashboard";
        } else {
          alert(data.message || "Sign-In failed. Try again.");
        }
      } catch (error) {
        console.error("Admin Sign-In failed:", error);
        alert("Admin Sign-In failed. Please try again.");
      }
    } else {
      setErrors(newErrors);
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
    if (errors[id]) {
      setErrors((prev) => ({
        ...prev,
        [id]: "",
      }));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 px-6 lg:px-8">
      <div className="max-w-md w-full mx-auto">
        <h2 className="text-3xl font-extrabold text-center text-gray-900">
          Admin Sign-In
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Forgot your password?{" "}
          <a
            href="/admin/forgot-password"
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            Click here
          </a>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <FormInput
              label="Email"
              icon={Mail}
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your admin email"
              error={errors.email}
            />

            <FormInput
              label="Password"
              icon={Lock}
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              error={errors.password}
            />

            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminSignIn;
