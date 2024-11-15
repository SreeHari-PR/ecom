const express = require('express');
const router = express.Router();
const authController = require('../controller/authController');
// const {protect}=require('../middleware/authMiddleware')

router.post('/signup', authController.signup);
router.post('/signin', authController.signin);



module.exports = router;