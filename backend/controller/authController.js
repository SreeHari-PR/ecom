const User = require('../model/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


const createToken = (id) => {
    return jwt.sign({ id }, 'abc123', {
        expiresIn: '7d'
    });
};

exports.signup = async (req, res) => {
    console.log('dsjhkgjhgsd');
    
    try {
        const { email, password, name } = req.body;

       
        if (!email || !password || !name) {
            return res.status(400).json({
                status: 'error',
                message: 'Please provide all required fields'
            });
        }

       
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                status: 'error',
                message: 'Email already registered'
            });
        }

        const newUser = await User.create({
            email,
            password,
            name
        });

        const token = createToken(newUser._id);

        newUser.password = undefined;

        res.status(201).json({
            status: 'success',
            token,
            data: {
                user: newUser
            }
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Error signing up user',
            error: error.message
        });
    }
};

exports.signin = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                status: 'error',
                message: 'Please provide email and password'
            });
        }

        const user = await User.findOne({ email }).select('+password');
        
        if (!user) {
            return res.status(401).json({
                status: 'error',
                message: 'Invalid email or password'
            });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        
        if (!isPasswordValid) {
            return res.status(401).json({
                status: 'error',
                message: 'Invalid email or password'
            });
        }

      
        const token = createToken(user._id);


        user.password = undefined;

        res.status(200).json({
            status: 'success',
            token,
            data: {
                user
            }
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Error signing in user',
            error: error.message
        });
    }
};
