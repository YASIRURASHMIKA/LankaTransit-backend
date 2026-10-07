import express from "express";

import {
    registerUser,
    loginUser
} from "../controllers/authController.js";

import {
    protect,
    authorizeRoles
} from "../middleware/authMiddleware.js";

import User from "../models/User.js";

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/profile", protect, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password");

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.status(200).json({
            message: "You accessed a protected route",
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });
    } catch (error) {
        res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
});

router.get(
    "/admin",
    protect,
    authorizeRoles("admin"),
    (req, res) => {
        res.status(200).json({
            message: "Welcome Admin",
            user: req.user
        });
    }
);

export default router;