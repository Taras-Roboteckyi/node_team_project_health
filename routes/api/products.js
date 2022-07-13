const express = require("express");
const router = express.Router();

const { searchProducts } = require("../../controllers/products");
const { dailyRate } = require("../../controllers/dailyRate");

router.get("/search/:query", searchProducts);
router.get("/public/", dailyRate);

module.exports = router;
