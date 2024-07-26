const axios = require("axios");

const BASE_URL = process.env.TELEGRA_API_URL;
const USERNAME = process.env.TELEGRA_API_USERNAME;
const PASSWORD = process.env.TELEGRA_API_PASSWORD;

const authenticateClient = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/auth/client`,
      {},
      {
        auth: {username: USERNAME, password: PASSWORD},
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    console.log(JSON.stringify(response.data.token));
    return JSON.stringify(response.data.token);
  } catch (error) {
    console.error("Error response data:", error.response?.data);
    console.error("Error response status:", error.response?.status);
    console.error("Error response headers:", error.response?.headers);
    throw new Error("Failed to authenticate client");
  }
};

const createPatient = async (patientData) => {
  try {
    const response = await axios.post(`${BASE_URL}/patients`, patientData, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${process.env.TELEGRA_ACCESS_TOKEN}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error response data:", error.response?.data);
    console.error("Error response status:", error.response?.status);
    console.error("Error response headers:", error.response?.headers);
    throw new Error("Failed to create patient");
  }
};

const getPatientByEmail = async (email) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/patients/actions/getByEmail/${email}`,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${process.env.TELEGRA_ACCESS_TOKEN}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error response data:", error.response?.data);
    console.error("Error response status:", error.response?.status);
    console.error("Error response headers:", error.response?.headers);
    throw new Error("Failed to get patient by email");
  }
};

const updatePatient = async (id, patientData) => {
  try {
    const response = await axios.put(
      `${BASE_URL}/patients/${id}`,
      patientData,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${process.env.TELEGRA_ACCESS_TOKEN}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error response data:", error.response?.data);
    console.error("Error response status:", error.response?.status);
    console.error("Error response headers:", error.response?.headers);
    throw new Error("Failed to update patient");
  }
};

const getProductVariations = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/productVariations`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${process.env.TELEGRA_ACCESS_TOKEN}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error response data:", error.response?.data);
    console.error("Error response status:", error.response?.status);
    console.error("Error response headers:", error.response?.headers);
    throw new Error("Failed to get product variations");
  }
};

module.exports = {
  authenticateClient,
  createPatient,
  getPatientByEmail,
  updatePatient,
  getProductVariations,
};
