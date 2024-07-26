const swaggerAutogen = require("swagger-autogen");

const doc = {
  info: {
    title: "Patient API",
    description: "This is an API for a medical app",
  },
  host: "localhost:8000",
  schemes: ["http"],
};

const outputFile = "./swagger.json";
const endpointsFiles = ["./routes/index.js"];

// this will generate swagger json
swaggerAutogen(outputFile, endpointsFiles, doc);
