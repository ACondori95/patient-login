const express = require("express");
const {sendOrderToPharmacy} = require("../controllers/order.controllers");
const router = express.Router();

router.post("/sendToPharmacy", sendOrderToPharmacy);

module.exports = router;
