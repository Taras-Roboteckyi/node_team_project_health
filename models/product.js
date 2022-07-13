const { Schema, model } = require("mongoose");
// const Joi = require("joi");

const productSchema = new Schema({
  _id: {
    type: Object,
  },
  categories: {
    type: Array,
  },
  weight: {
    type: Number,
    default: 100,
  },
  title: {
    type: Object,
  },
  calories: {
    type: Number,
  },
  groupBloodNotAllowed: {
    type: Array,
  },
});

const Product = model("Product", productSchema);

module.exports = { Product };
