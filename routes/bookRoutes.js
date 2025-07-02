/*

Author: Lukus Klipping
Date: 2025-06-30
Email: lukusklipping@gmail.com

*/

const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookController");

//Get all books
router.get("/", bookController.getAllBooks);

//Get book by id
router.get("/:id", bookController.getBookId);

// Post new book
router.post("/", bookController.createBook);

// Update book by id
router.put("/:id", bookController.updateBook);

//Delete book by id
router.delete("/:id", bookController.deleteBook);

module.exports = router;
