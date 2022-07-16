const { User } = require("../models/user");

const { createError } = require("../helpers/errors");

const updateUser = async (id, data) => {
  return User.findByIdAndUpdate(id, data, { new: true });
};

const findUser = async (filters) => {
  return User.findOne(filters);
};

const updateUserData = async (
  id,
  inputUserData,
  notAllowedProducts,
  calories
) => {
  const user = await User.findByIdAndUpdate(
    id,
    { inputUserData, notAllowedProducts },
    { new: true }
  );
  if (!user) {
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
  updateUserData,
};
