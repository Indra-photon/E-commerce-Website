const express = require('express');

const router = express.Router();

const userController = require("../controllers/userController");


router.post("/users", userController.createUser);
router.get("/users", userController.allUser);
router.get("/user", userController.findUser);
router.delete("/users", userController.deleteUser);


module.exports = router;