const {fetchPatients, createPatient} = require("../services/api.service");

exports.fetchPatient = async (req, res, next) => {
  try {
    const patient = await fetchPatients(req.params.id);
    res.status(200).json(patient);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.createPatient = async (req, res, next) => {
  try {
    const patient = await createPatient(req.body);
    res.status(201).json(patient);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
