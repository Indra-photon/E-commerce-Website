const express = require('express');

const router = express.Router();

const cartController = require("../controllers/cartController");

router.post("/carts", cartController.createCart);
router.get("/carts", cartController.allCart);
router.delete("/carts", cartController.deleteCart);

module.exports = router;