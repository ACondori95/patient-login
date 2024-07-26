const express = require("express");
// const {isAuthenticated, isAdmin} = require("../middlewares/auth");
const {
  createPlan,
  displayPlan,
  updatePlan,
  deletePlan,
} = require("../controllers/plan.controllers");
const router = express.Router();

router.post("/plan/create", createPlan);
router.get("/plans/all", displayPlan);
router.put("/plan/update/:id", updatePlan);
router.delete("/plan/delete/:id", deletePlan);

module.exports = router;
