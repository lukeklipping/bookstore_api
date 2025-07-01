/*

Author: Lukus Klipping
Date: 2025-06-30
Email: lukusklipping@gmail.com

*/

const mongoose = require("mongoose");

// Define the schema for the Author model
const authorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  bio: String,
  books: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Book",
    },
  ],
});

module.exports = mongoose.Model("Author", authorSchema);
