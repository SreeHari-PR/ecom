const Category = require("../model/categoryModel");

exports.addCategory = async (req, res) => {
    console.log('sdhfjashjk')
  try {
    const { name, description } = req.body;
   console.log(req.body,'category');
   
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
exports.listCategories = async (req, res) => {
  console.log('kjsdhjk')
  try {
    const categories = await Category.find();
    if (categories.length === 0) {
      return res.status(404).json({
        status: "error",
        message: "No categories found",
      });
    }
    res.status(200).json({
      status: "success",
      message: "Categories retrieved successfully",
      data: categories,
    });
  } catch (error) {
    console.error("Error retrieving categories:", error.message);
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
};


