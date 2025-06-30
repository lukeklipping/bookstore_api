const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
