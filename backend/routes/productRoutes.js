const express = require('express');

const router = express.Router();

const productController = require("../controllers/productController");

router.post("/products", productController.createProduct);
router.get("/products", productController.allProduct);
router.put("/products/:id", productController.updateProduct);
router.delete("/products/:id", productController.deleteProduct);
router.get("/products/:id", productController.singleProduct);

/*router.post("/carts", productController.createCart);
router.get("/carts", productController.allCart);*/


/*router.post("/user", productController.createUser);
router.get("/user", productController.allUser);
router.put("/user/:id", productController.updateUser);*/

module.exports = router;