// const Plan = require("../models/plan.models");

exports.createPlan = async (req, res, next) => {
  // #swagger.tags=['Plans']
  const {plan_name, condition_treated, price} = req.body;
  try {
    const plan = await Plan.create({plan_name, condition_treated, price});
    res.status(201).json({success: true, plan});
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.displayPlan = async (req, res, next) => {
  // #swagger.tags=['Plans']
  try {
    const plans = await Plan.find();

    res.status(201).json({success: true, plans});
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.updatePlan = async (req, res, next) => {
  // #swagger.tags=['Plans']
  try {
    // build the data object
    const data = {
      plan: req.body.plan,
      condition_treated: req.body.condition_treated,
      price: req.body.price,
    };

    const planUpdate = await Plan.findOneAndUpdate({_id: req.params.id}, data, {
      new: true,
    });

    res.status(200).json({success: true, planUpdate});
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.deletePlan = async (req, res, next) => {
  // #swagger.tags=['Plans']
  try {
    const plan = await Plan.findByIdAndDelete({_id: req.params.id});
    res.status(201).json({success: true, message: "Product deleted"});
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// endpoint to use the telegra api
// need to create a patient in Telegra, create order, and submit order
// have a patient, order, and questionare by the end on the week
