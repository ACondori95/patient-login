const {sendOrderToPharmacy} = require("../services/api.service");

exports.sendOrderToPharmacy = async (req, res, next) => {
  try {
    const {orderIdentifier} = req.body;
    const result = await sendOrderToPharmacy(orderIdentifier);
    res.status(200).json({success: true, result});
  } catch (error) {
    console.log(error);
    next(error);
  }
};
