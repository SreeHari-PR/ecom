const Category = require("../model/categoryModel");

exports.addCategory = async (req, res) => {
  try {
    const { name, description } = req.body;
    if (!name || !description) {
      return res.status(400).json({
        status: "error",
        message: "Name and description are required",
      });
    }
    const existingCategory = await Category.findOne({ name });
    if (existingCategory) {
      return res.status(400).json({
        status: "error",
        message: "Category already exists",
      });
    }
    const newCategory = new Category({ name, description });
    const savedCategory = await newCategory.save();

    
    res.status(201).json({
      status: "success",
      message: "Category added successfully",
      data: savedCategory,
    });
  } catch (error) {
    console.error("Error adding category:", error.message);
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
};


