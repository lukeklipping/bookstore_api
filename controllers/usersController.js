const user = require("../models/User");

// GET /api/users - Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await user.find();
    res.status(200), json({ users });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// GET /api/users/:id - Get a user by ID
exports.getuserId = async (req, res) => {
  try {
    const user = await user.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "user not found" });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// POST /api/users - Create a new user
exports.createuser = async (req, res) => {
  const { user, books, total, createdAt } = req.body;
  if (!user || !books || !total) {
    return res
      .status(400)
      .json({ error: "User, books, and total are required" });
  }
  try {
    const newOrder = new user({ user, books, total, createdAt });
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// PUT /api/users/:id - Update a user by ID
exports.updateOrder = async (req, res) => {
  const { user, books, total, createdAt } = req.body;
  if (!title || !price || !author) {
    return res
      .status(400)
      .json({ error: "User, books, and total are required" });
  }
  try {
    const user = await user.findByIdAndUpdate(
      req.params.id,
      { user, books, total, createdAt },
      { new: true }
    );
    if (!user) {
      return res.status(404).json({ error: "user not found" });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// DELETE /api/users/:id - Delete a user by ID
exports.deleteOrder = async (req, res) => {
  try {
    const user = await user.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "user not found" });
    }
    res.status(200).json({ message: "user deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};
