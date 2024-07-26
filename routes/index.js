const router = require("express").Router();

router.use("/", require("./swagger.routes"));
router.use("/api", require("./auth.routes"));
router.use("/api/patients", require("./patient.routes"));
router.use("/api/products", require("./product.routes"));
router.use("/api/orders", require("./order.routes"));

module.exports = router;
