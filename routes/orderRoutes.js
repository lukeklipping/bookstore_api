/*

Author: Lukus Klipping
Date: 2025-06-30
Email: lukusklipping@gmail.com

*/

// This code defines the routes for handling orders in an Express application.

const express = require("express");
const router = express.Router();
const orderController = require("../controllers/ordersController");

//Get all orders
router.get("/", orderController.getAllOrders);

//Get order by ID
router.get("/:id", orderController.getorderId);

// POST new order
router.post("/", orderController.createorder);

// PUT update order by id
router.put("/:id", orderController.updateOrder);

// DELETE order by id
router.delete("/:id", orderController.deleteOrder);

module.exports = router;
