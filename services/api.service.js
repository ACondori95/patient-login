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

module.exports = {authenticateClient};
