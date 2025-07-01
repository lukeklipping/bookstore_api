/*

Author: Lukus Klipping
Date: 2025-06-30
Email: lukusklipping@gmail.com

*/

const Book = require("../models/Book");

// GET /api/books - Get all books
exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find().populate("author");
    res.status(200), json({ books });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// GET /api/books/:id - Get a book by ID
exports.getBookId = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id).populate("author");
    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }
    res.status(200).json(book);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// POST /api/books - Create a new book
exports.createBook = async (req, res) => {
  const { title, summary, price, author } = req.body;

  if (!title || !price || !author) {
    return res
      .status(400)
      .json({ error: "Title, price, and author are required" });
  }

  try {
    const newBook = new Book({ title, summary, price, author });
    await newBook.save();
    res.status(201).json(newBook);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// PUT /api/books/:id - Update a book by ID
exports.updateBook = async (req, res) => {
  const { title, summary, price, author } = req.body;

  if (!title || !price || !author) {
    return res
      .status(400)
      .json({ error: "Title, price, and author are required" });
  }

  try {
    const book = await Book.findByIdAndUpdate(
      req.params.id,
      { title, summary, price, author },
      { new: true }
    );

    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }

    res.status(200).json(book);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// DELETE /api/books/:id - Delete a book by ID
exports.deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};
