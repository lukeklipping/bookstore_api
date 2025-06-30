const Author = require("../models/Author");

// GET /api/Authors - Get all Authors
exports.getAllAuthors = async (req, res) => {
  try {
    const authors = await Author.find();
    res.status(200), json({ authors });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// GET /api/Authors/:id - Get authors by ID
exports.getAuthorById = async (req, res) => {
  try {
    const author = await author.findById(req.params.id);
    if (!author) {
      return res.status(404).json({ error: "Author not found" });
    }
    res.status(200).json(author);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// POST /api/authors - Create a new author
exports.createAuthor = async (req, res) => {
  const { name, bio, books } = req.body;

  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  }

  try {
    const newAuthor = new Author({ name, bio, books });
    await newAuthor.save();
    res.status(201).json(newAuthor);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// PUT /api/Author/:id - Update a author by ID
exports.updateAuthor = async (req, res) => {
  const { name, bio, books } = req.body;

  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  }

  try {
    const author = await author.findByIdAndUpdate(
      req.params.id,
      { name, bio, books },
      { new: true }
    );

    if (!author) {
      return res.status(404).json({ error: "author not found" });
    }

    res.status(200).json(author);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// DELETE /api/author/:id - Delete a author by ID
exports.deletAuthor = async (req, res) => {
  try {
    const author = await author.findByIdAndDelete(req.params.id);
    if (!author) {
      return res.status(404).json({ error: "author not found" });
    }
    res.status(200).json({ message: "author deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};
