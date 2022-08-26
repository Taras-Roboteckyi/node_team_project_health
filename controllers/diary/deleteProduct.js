const {findProductByDateUser } = require("../../services/diary");
const { updateInfo } = require("../../services/diary");
const { createError } = require("../../helpers/errors");

const deleteProduct = async (req, res) => {
  const { _id: userId } = req.user;
  const { productId, date } = req.query;

  const selectedDate = await findProductByDateUser(date, userId);
  const { _id: dateId, consumedProducts, total: summary } = selectedDate;
  const product = consumedProducts.find((product) => product._id === productId);

  if (!selectedDate || !product) {
    throw createError(404, "Product not found");
  }

  const total = summary - product.kcal;
  await updateInfo(dateId, productId, total);

  res.json({
    message: "Product was deleted",
    status: "success",
    code: 200,
    data: product,
  });
};

module.exports = {deleteProduct};