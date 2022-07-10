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
    verify: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      required: [true, "Verify token is required"],
      default: function () {
        return v4();
      },
    },
  },
  { timestamps: true }
);

const schemaRegister = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
    })
    .required(),
  password: Joi.string().required(),
});

const schemaLogin = Joi.object({
  email: Joi.string()
    .email({
      minDomainSegments: 2,
    })
    .required(),
  password: Joi.string().required(),
});

const schemaVerify = Joi.object({
  email: Joi.string()
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
