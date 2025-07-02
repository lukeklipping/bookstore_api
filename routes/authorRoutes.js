/*

Author: Lukus Klipping
Date: 2025-06-30
Email: lukusklipping@gmail.com

*/

const express = require("express");
const router = express.Router();
const authorController = require("../controllers/authorsController");

// Get all authors
router.get("/", authorController.getAllAuthors);

// Get authors by id
router.get("/:id", authorController.getAuthorById);

// Post new author
router.get("/", authorController.createAuthor);

// Update Author
router.get("/:id", authorController.updateAuthor);

// Delete author
router.get("/:id", authorController.deleteAuthor);

module.exports = router;
