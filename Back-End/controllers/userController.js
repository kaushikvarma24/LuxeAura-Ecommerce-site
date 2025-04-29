import dotenv from "dotenv";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import userModel from '../models/userModule.js';


// Load environment variables
dotenv.config();

// Function to create a JWT token
const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
};

// Route for user login
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }

        // Check if user exists
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        // Generate a token
        const token = createToken(user._id);

        res.status(200).json({ success: true, message: "Login successful", token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};

// Route for user registration
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if user already exists
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.status(400).json({ success: false, message: "User already exists" });
        }

        // Validate email format and strong password
        if (!validator.isEmail(email)) {
            return res.status(400).json({ success: false, message: "Please enter a valid email" });
        }

        if (password.length < 8) {
            return res.status(400).json({ success: false, message: "Please enter a strong password. It must be at least 8 characters long." });
        }

        // Hashing user password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new user instance
        const newUser = new userModel({
            name,
            email,
            password: hashedPassword,
        });

        // Save the user to the database
        const user = await newUser.save();

        // Generate a token
        const token = createToken(user._id);

        res.status(201).json({ success: true, message: "User registered successfully", user, token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};

// Route for admin login
const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate email and password
        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }

        // Check if the provided email and password match the admin credentials in the .env file
        if (email !== process.env.ADMIN_EMAIL || password !== process.env.ADMIN_PASSWORD) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        // Generate a token for admin authentication (you can implement your own token logic here)
        const token = createToken("admin");

        res.status(200).json({ success: true, message: "Admin login successful", token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};

export default createToken;
export { loginUser, registerUser, adminLogin };