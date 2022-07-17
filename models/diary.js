const {Schema, model}=require('mongoose');
const Joi=require('joi');

const productSchema = new Schema ({
    _id:{
        type: Schema.Types.ObjectId,
        ref:"products",
    },
    title:{
        type:String,
    },
    calories:{
        type: Number,
    },
    weight:{
        type:Number,
        default:100,
    }
});

const diarySchema = new Schema ({
    productTitle:{
        type:String,
    },
    date:{
        type:String,
        require:[true,'Date is required']
    },
    productCalories:{
        type:Number,
        default:0,
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:'users'
    }
});

const addProductSchema= Joi.object({
    // date: Joi.string().required(),
    productTitle:Joi.string().required(),
    // title: Joi.string(),
    productWeight: Joi.number().required(),
    date: Joi.date().required(),

});

const deleteProductSchema=Joi.object({
    productTitle:Joi.string().required(),
    date:Joi.string().required(),
    // user:Joi.string(),
});

const diarySchemas={
    add:addProductSchema,
    delete:deleteProductSchema,
};

const Diary=model('diary', diarySchema);

module.exports={
    Diary,
    diarySchemas,

}



