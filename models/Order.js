/*

Author: Lukus Klipping
Date: 2025-06-30
Email: lukusklipping@gmail.com

*/

const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: URLSearchParams,
    required: true,
  },
  books: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Book", required: true },
  ],
  total: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Orders", orderSchema);
