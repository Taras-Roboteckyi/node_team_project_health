const authService = require("../services/auth.service");

const registerUser = async (req, res, next) => {
  try {
    const user = await authService.registerUser(req.body);
    res.status(201).json({
      code: 201,
      user: { id: user._id, name: user.name, email: user.email },
    });
  } catch (e) {
    next(e);
  }
};

const loginUser = async (req, res, next) => {
  try {
    const token = await authService.loginUser(req.body);

    res.json({
      code: 200,
      data: token,
    });
  } catch (e) {
    next(e);
  }
};

const logoutUser = async (req, res, next) => {
  try {
    await authService.logoutUser(req.user._id);
    res.sendStatus(204);
  } catch (e) {
    next(e);
  }
};

const getUser = async (req, res, next) => {
  try {
    const data = await authService.authenticateUser(req.user.token);

    res.status(200).json({
      id: data._id,
      name: data.name,
      email: data.email,
      userData: data.inputUserData,
      notAllowedProducts: data.notAllowedProducts,
    });
  } catch (e) {
    next(e);
  }
};
module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  getUser,
};
