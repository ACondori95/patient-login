const router = require("express").Router();

router.use("/", require("./swagger.routes"));
router.use("/api", require("./auth.routes"));
router.use("/api", require("./plan.routes"));
router.use("/api", require("./patient.routes"));

module.exports = router;
