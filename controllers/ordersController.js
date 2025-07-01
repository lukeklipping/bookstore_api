const order = require("../models/Order");
// GET /api/orders - Get all orders
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await order.find();
    res.status(200), json({ orders });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// GET /api/orders/:id - Get a order by ID
exports.getorderId = async (req, res) => {
  try {
    const order = await order.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ error: "order not found" });
    }
    res.status(200).json(order);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// POST /api/orders - Create a new order
exports.createorder = async (req, res) => {
  const { user, books, total, createdAt } = req.body;
  if (!user || !books || !total) {
    return res
      .status(400)
      .json({ error: "User, books, and total are required" });
  }
  try {
    const newOrder = new order({ user, books, total, createdAt });
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// PUT /api/orders/:id - Update a order by ID
exports.updateOrder = async (req, res) => {
  const { user, books, total, createdAt } = req.body;
  if (!title || !price || !author) {
    return res
      .status(400)
      .json({ error: "User, books, and total are required" });
  }
  try {
    const order = await order.findByIdAndUpdate(
      req.params.id,
      { user, books, total, createdAt },
      { new: true }
    );
    if (!order) {
      return res.status(404).json({ error: "order not found" });
    }
    res.status(200).json(order);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// DELETE /api/orders/:id - Delete a order by ID
exports.deleteOrder = async (req, res) => {
  try {
    const order = await order.findByIdAndDelete(req.params.id);
    if (!order) {
      return res.status(404).json({ error: "order not found" });
    }
    res.status(200).json({ message: "order deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};
