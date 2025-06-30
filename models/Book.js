const mongoose = require("mongoose");

// Define the schema for the Book model
const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  summary: String,
  price: { type: Number, required: true },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Authors",
    required: true,
  },
});

module.exports = mongoose.model("Book", bookSchema);
