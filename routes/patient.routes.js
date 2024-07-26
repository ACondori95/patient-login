const express = require("express");
const {
  createPatient,
  getPatientByEmail,
  updatePatient,
} = require("../controllers/patient.controllers");
const router = express.Router();

router.post("/create", createPatient);
router.get("/getByEmail/:email", getPatientByEmail);
router.put("/update/:id", updatePatient);

module.exports = router;
