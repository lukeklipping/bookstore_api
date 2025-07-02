/*

Author: Lukus Klipping
Date: 2025-06-30
Email: lukusklipping@gmail.com

*/

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");

const app = express();
const PORT = process.env.PORT;

// connect databasse
connectDB();

// middleware
app.use(cors());
app.use(express.json());

const authorRoutes = require("./routes/authorRoutes");
const bookRoutes = require("./routes/bookRoutes");
const orderRoutes = require("./routes/orderRoutes");
const userRoutes = require("./routes/userRoutes");

app.use("/api/authors", authorRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/users", userRoutes);

// start server

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
