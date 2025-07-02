/*

Author: Lukus Klipping
Date: 2025-06-30
Email: lukusklipping@gmail.com

*/

const express = require("express");
const router = express.Router();
const userController = require("../controllers/usersController");

// Get all users
router.get("/", userController.getAllUsers);

//Get user by Id
router.get("/:id", userController.getUserId);

// Post new user
router.post("/", userController.createUser);

// Update new user by id
router.put("/:id", userController.updateUser);

// Delete new user
router.delete("/:id", userController.deleteUser);

module.exports = router;
