const express = require("express");
const {getProductVariations} = require("../controllers/product.controllers");
const router = express.Router();

router.get("/variations", getProductVariations);

module.exports = router;
