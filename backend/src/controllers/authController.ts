// src/controllers/authController.js
const bcrypt = require('bcryptjs');
const User = require('../models/User');

exports.registerUser = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Check if user already exists
        let user = await User.findOne({ username });
        if (user) {
            return res.status(400).json({ success: false, message: "User already exists" });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create user
        user = new User({
            username,
            password: hashedPassword,
        });

        await user.save();
        res.status(201).json({ success: true, message: "User registered successfully" });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server error during registration");
    }
};

exports.loginUser = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ success: false, message: "Invalid credentials" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ success: false, message: "Invalid credentials" });
        }

        res.json({ success: true, message: "Logged in successfully" });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server error during login");
    }
};
