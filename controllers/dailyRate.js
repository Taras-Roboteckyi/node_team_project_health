const { Product, inputData } = require("../models/product");
const { dailyRateCalc } = require("../helpers/dailyRateCalc");
const { createError } = require("../helpers/errors");

const dailyRateNotAllowProducts = async (req, res, next) => {
  try {
    const { error } = inputData.validate(req.body);
    if (error) {
      throw createError(400, error.message);
    }
    const { bloodType } = req.params;
    const notAllowedProducts = await Product.find(
      { ["groupBloodNotAllowed." + bloodType]: { $eq: true } },
      "-__v ",
      {
        limit: 10,
        sort: { calories: -1 },
      }
    );
    if (!notAllowedProducts) {
      throw createError(404, "Not found");
    }
    const calories = dailyRateCalc(req.body);
    const result = {
      code: 200,
      calories,
      notAllowedProducts,
    };
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = { dailyRateNotAllowProducts };
