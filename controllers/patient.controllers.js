const {
  createPatient,
  getPatientByEmail,
  updatePatient,
} = require("../services/api.service");

exports.createPatient = async (req, res, next) => {
  try {
    const patientData = req.body;
    const result = await createPatient(patientData);
    res.status(201).json({success: true, patient: result});
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.getPatientByEmail = async (req, res, next) => {
  try {
    const {email} = req.params;
    const patient = await getPatientByEmail(email);
    res.status(200).json({success: true, patient});
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.updatePatient = async (req, res, next) => {
  try {
    const {id} = req.params;
    const patientData = req.body;
    const updatedPatient = await updatePatient(id, patientData);
    res.status(200).json({success: true, patient: updatedPatient});
  } catch (error) {
    console.log(error);
    next(error);
  }
};
