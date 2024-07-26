const express = require("express");
const {fetchPatient, createPatient} = require("../controllers/api.controllers");
const router = express.Router();

router.get("/:id", fetchPatient);
router.post("/", createPatient);

module.exports = router;
