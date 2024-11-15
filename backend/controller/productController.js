const Product = require("../model/productModel");
const Category = require("../model/categoryModel");

exports.addProduct = async (req, res) => {
  try {
    const { name, brand, description, price, discount, category, images, stock } = req.body;

    if (!name || !brand || !description || !price || !category || !images || images.length === 0) {
      return res.status(400).json({
        status: "error",
        message: "All required fields must be provided",
      });
    }

    const categoryExists = await Category.findById(category);
    if (!categoryExists) {
      return res.status(404).json({
        status: "error",
        message: "Category not found",
      });
    }

    const discountedPrice = discount ? price - (price * discount / 100) : price;

    const newProduct = new Product({
      name,
      brand,
      description,
      price,
      discount,
      discountedPrice,
      category,
      images,
      stock
    });

    const savedProduct = await newProduct.save();

    res.status(201).json({
      status: "success",
      message: "Product added successfully",
      data: savedProduct,
    });
  } catch (error) {
    console.error("Error adding product:", error.message);
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
};

exports.listProducts = async (req, res) => {
    try {
      const { page = 1, limit = 10, sortBy = "createdAt", order = "desc" } = req.query;
  
      const skip = (page - 1) * limit;
  
      const products = await Product.find()
        .populate("category", "name description")
        .sort({ [sortBy]: order === "asc" ? 1 : -1 })
        .skip(skip)
        .limit(parseInt(limit));
      const totalProducts = await Product.countDocuments();
  
      res.status(200).json({
        status: "success",
        data: products,
        pagination: {
          total: totalProducts,
          page: parseInt(page),
          pages: Math.ceil(totalProducts / limit),
        },
      });
    } catch (error) {
      console.error("Error listing products:", error.message);
      res.status(500).json({
        status: "error",
        message: "Internal server error",
      });
    }
  };
  

