const User = require('../model/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


const createToken = (id) => {
    return jwt.sign({ id }, 'abc123', {
        expiresIn: '7d'
    });
};

exports.signin = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(req.body,'adminfr')
        if (!email || !password) {
            return res.status(400).json({
                status: 'error',
                message: 'Please provide email and password'
            });
        }

        const admin = await User.findOne({ email,isAdmin: true }).select('+password');
        if (!admin) {
            return res.status(401).json({
                status: 'error',
                message: 'Invalid email or password'
            });
        }

        const isPasswordValid = await bcrypt.compare(password, admin.password);
        
        if (!isPasswordValid) {
            return res.status(401).json({
                status: 'error',
                message: 'Invalid email or password'
            });
        }

      
        const token = createToken(admin._id);


        admin.password = undefined;

        res.status(200).json({
            status: 'success',
            token,
            data: {
                admin
            }
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Error signing in admin',
            error: error.message
        });
    }
};
