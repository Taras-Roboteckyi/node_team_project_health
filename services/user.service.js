const { Product, inputData } = require("../models/product");
const { User } = require("../models/user");
const { dailyRateCalc } = require("../helpers/dailyRateCalc");
const { createError } = require("../helpers/errors");

const updateUser = async (id, data) => {
  return User.findByIdAndUpdate(id, data, { new: true });
};

const findUser = async (filters) => {
  return User.findOne(filters);
};

const userNotAllowedProducts = async (products) => {
  const { error } = inputData.validate({ products: products.req.body });
  if (error) {
    throw createError(400, error.message);
  }
  const { bloodType } = products.req.params;
  const { _id } = products.req.user;
  const notAllowedProducts = await Product.find(
    { ["groupBloodNotAllowed." + bloodType]: { $eq: true } },
    "-__v ",
    { sort: { calories: -1 } }
  );
  if (!notAllowedProducts) {
    throw createError(404, "Not found");
  }
  const calories = dailyRateCalc({ products: products.req.body });
  const inputUserData = {
    ...products.req.body,
    calories,
  };
  const result = await User.findByIdAndUpdate(
    _id,
    { inputUserData, notAllowedProducts },
    { new: true }
  );
  if (!result) {
    createError(404, "Not Found");
  }
  const response = {
    products: [...notAllowedProducts],
    calories,
  };
  return response;
};

module.exports = {
  updateUser,
  findUser,
  userNotAllowedProducts,
};
