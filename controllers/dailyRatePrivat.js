const userService = require("../services/user.service");

const userNotAllowedProducts = async (req, res, next) => {
  try {
    const user = await userService.userNotAllowedProducts(req.body);
    res.status(201).json({
      code: 201,
      result: user,
    });
  } catch (e) {
    next(e);
  }
};
module.exports = { userNotAllowedProducts };
