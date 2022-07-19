const { Schema, model } = require("mongoose");
const Joi = require("joi");
const { v4 } = require("uuid");

const schema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    token: {
      type: String,
      default: null,
    },

    verificationToken: {
      type: String,
      required: [true, "Verify token is required"],
      default: function () {
        return v4();
      },
    },
    inputUserData: {
      type: Object,
      default: {
        height: "0",
        age: "0",
        currentWeight: "0",
        desiredWeight: "0",
        bloodType: "0",
        calories: "0",
      },
    },
    notAllowedProducts: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

const schemaRegister = Joi.object({
  name: Joi.string().min(3).max(254).required(),
  email: Joi.string()
    .min(3)
    .max(254)
    .email({
      minDomainSegments: 2,
    })
    .required(),
  password: Joi.string().min(8).max(100).required(),
});

const schemaLogin = Joi.object({
  email: Joi.string()
    .min(3)
    .max(254)
    .email({
      minDomainSegments: 2,
    })
    .required(),
  password: Joi.string().min(8).max(100).required(),
});

const schemaVerify = Joi.object({
  email: Joi.string()
    .min(3)
    .max(254)
    .email({
      minDomainSegments: 2,
    })
    .required(),
});

const User = model("user", schema);

module.exports = {
  User,
  schemaRegister,
  schemaLogin,
  schemaVerify,
};
