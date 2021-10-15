const express = require("express");
const router = express.Router();
const controller = require("../controllers/product.controller");

router.get("/api/items", controller.items);
router.get("/api/item/:id", controller.item);


module.exports = router;
