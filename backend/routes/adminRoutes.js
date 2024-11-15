const express = require("express");
const adminController = require("../controller/adminController");
const categoryContoller=require('../controller/categoryController')

const router = express.Router();

router.post("/signin", adminController.signin);

// category
router.post('/categories/add',categoryContoller.addCategory);
router.get('/categories/list',categoryContoller.listCategories);

// product




module.exports = router;
