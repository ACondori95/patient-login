const {getProductVariations} = require("../services/api.service");

exports.getProductVariations = async (req, res, next) => {
  try {
    const variations = await getProductVariations();
    res.status(200).json({success: true, productVariations: variations});
  } catch (error) {
    console.log(error);
    next(error);
  }
};
