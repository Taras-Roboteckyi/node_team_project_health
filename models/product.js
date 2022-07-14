const { Schema, model } = require("mongoose");
const Joi = require("joi");

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
    1: Boolean,
    2: Boolean,
    3: Boolean,
    4: Boolean,
  },
});

const inputData = Joi.object({
  height: Joi.string().required(),
  age: Joi.string().required(),
  currentWeight: Joi.string().required(),
  desiredWeight: Joi.string().required(),
  bloodType: Joi.string().required(),
});

const Product = model("Product", productSchema);

module.exports = { Product, inputData };
