const { Product } = require(".././models/product");
const { createError } = require(".././helpers/errors");

const searchProducts = async (req, res, next) => {
  try {
    const searchQuery = new RegExp(req.params.query, "gi");

    const queryResult = await Product.find().or({
      "title.ua": { $regex: searchQuery },
    });

    if (queryResult.length === 0) {
      throw createError(404, "Product not found");
    }
    res.json(queryResult);
  } catch (error) {
    next(error);
  }
};

module.exports = { searchProducts };
