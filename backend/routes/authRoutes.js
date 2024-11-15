const express = require('express');
const router = express.Router();
const authController = require('../controller/authController');
const categoryContoller=require('../controller/categoryController')
// const {protect}=require('../middleware/authMiddleware')

router.post('/signup', authController.signup);
router.post('/signin', authController.signin);

//category
router.get('/categories/list',categoryContoller.listCategories);



module.exports = router;