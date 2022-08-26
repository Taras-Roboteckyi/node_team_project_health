const { Schema, model } = require("mongoose");
const Joi = require("joi").extend(require("@joi/date"));

const diarySchema = new Schema(
  {
    date: {
      type: String,
      require: [true, "Date is required"],
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "users",
      require: true,
    },
    consumedProducts:{
      type:[
        {
          _id:{type:String, required:true},
          title:{
            type:Object,
            ua:{type:String},
            ru:{type:String},
          },
          weight:{type:Number, required:true},
          kcal:{type:Number, required:true},
        },
      ],
    default:[],
  },
  total: {type:Number,default:0}
},
  { timestamps: true }
);

const addProductSchema = Joi.object({
  id:Joi.string().required(),
  weight: Joi.number().required(),
});


const diarySchemas = {
  add: addProductSchema,
};

const Diary = model("diary", diarySchema);

module.exports = {
  Diary,
  diarySchemas,
};
