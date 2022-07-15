const express = require("express");

const { dailyRate } = require("../../controllers/dailyRate");
const router = express.Router();
// const { schemaVerify } = require("../../models/user");
// const { validateRequest } = require("../../middlewares/validateRequest");
const { auth } = require("../../middlewares");


router.post("/users/privat", auth, dailyRate);

module.exports = router;
