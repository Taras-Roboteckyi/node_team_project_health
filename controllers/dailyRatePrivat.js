const { Product, inputData } = require("../models/product");
const { User } = require("../models/user");
const { dailyRateCalc } = require("../helpers/dailyRateCalc");
const { createError } = require("../helpers/errors");

const userNotAllowedProducts = async (req, res, next) => {
  try {
    const { error } = inputData.validate(req.body);
    if (error) {
      throw createError(400, error.message);
    }
    const { bloodType } = req.body;
    const notAllowedProducts = await Product.find(
      { ["groupBloodNotAllowed." + bloodType]: { $eq: true } },
      "-__v ",
      { limit: 20, sort: { calories: -1 } }
    );
    if (!notAllowedProducts) {
      throw createError(404, "Not found");
    }
    const calories = dailyRateCalc(req.body);
    const inputUserData = {
      ...req.body,
      calories,
    };

    const { _id } = req.user;
    const user = await User.findByIdAndUpdate(
      _id,
      { inputUserData, notAllowedProducts },
      { new: true }
    );

    if (!user) {
      createError(404, "Not found");
    }
    res.json({
      code: 200,
      calories,
      notAllowedProducts,
    });
  } catch (error) {
    next(error);
  }
};
module.exports = { userNotAllowedProducts };
