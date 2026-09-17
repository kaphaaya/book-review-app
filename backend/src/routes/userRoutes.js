const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getUserById,
  registerUser,
  loginUser,
} = require("../controllers/userController");

// Get all users
router.get("/", getAllUsers);

// Get user by ID
router.get("/:id", getUserById);

// Register new user
router.post("/register", registerUser);

// Login user
router.post("/login", loginUser);

// Alias POST / for registration (for compatibility)
router.post("/", registerUser);

module.exports = router;
