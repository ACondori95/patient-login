const {authenticateClient} = require("../services/api.service");

exports.authenticate = async (req, res, next) => {
  try {
    const token = await authenticateClient();
    console.log(token);
    process.env.TELEGRA_ACCESS_TOKEN = token;
    res.status(200).json({success: true, token});
  } catch (error) {
    console.log(error);
    next(error);
  }
};
