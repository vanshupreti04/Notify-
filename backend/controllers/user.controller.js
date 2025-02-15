import userModel from "../models/user.model.js";
import * as userService from "../services/user.service.js";
import { validationResult } from "express-validator";
import BlacklistedToken from "../models/blacklistedToken.model.js"; // ✅ Import Blacklist Model

// ✅ Create User Controller
export const createUserController = async (req, res) => {
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const user = await userService.createUser(req.body);
        const token = await user.generateJWT();

        delete user._doc.password; // Hide password before sending response

        res.status(201).json({ user, token });
    } catch (error) {
        console.error("Registration Error:", error.message);
        res.status(400).json({ error: error.message });
    }
};

// ✅ Login Controller
export const loginController = async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email }).select("+password");

        if (!user || !(await user.isValidPassword(password))) {
            return res.status(401).json({ error: "Invalid credentials" });
        }

        const token = await user.generateJWT();
        delete user._doc.password;

        res.status(200).json({ user, token });
    } catch (err) {
        console.error("Login Error:", err.message);
        res.status(400).json({ error: err.message });
    }
};

// ✅ Get Profile Controller
export const profileController = async (req, res) => {
    res.status(200).json({ user: req.user });
};

// ✅ Logout Controller (Replaces Redis with MongoDB)
export const logoutController = async (req, res) => {
    try {
        const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

        if (!token) {
            return res.status(400).json({ error: "No token provided" });
        }

        // ✅ Store token in MongoDB blacklist
        await BlacklistedToken.create({ token });

        // ✅ Clear the cookie
        res.cookie("token", "", { expires: new Date(0) });

        res.status(200).json({ message: "Logged out successfully" });
    } catch (err) {
        console.error("Logout Error:", err.message);
        res.status(500).json({ error: "Something went wrong" });
    }
};

// ✅ Get All Users Controller
export const getAllUsersController = async (req, res) => {
    try {
        const loggedInUser = await userModel.findOne({ email: req.user.email });
        const allUsers = await userService.getAllUsers({ userId: loggedInUser._id });

        res.status(200).json({ users: allUsers });
    } catch (err) {
        console.error("Get Users Error:", err.message);
        res.status(400).json({ error: err.message });
    }
};
