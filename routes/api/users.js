const express = require("express");

const { dailyRates } = require("../../controllers/dailyRates");
const router = express.Router();
// const { schemaVerify } = require("../../models/user");
// const { validateRequest } = require("../../middlewares/validateRequest");
const { auth } = require("../../middlewares");

router.post("/users/public", dailyRates);
router.post("/users/privat", auth, dailyRates);

module.exports = router;
