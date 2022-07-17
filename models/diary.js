const {Schema, model}=require('mongoose');
const Joi=require('joi').extend(require('@joi/date'));

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
    },
    productWeight:{
        type:Number,
        default:0,
    },
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
    date:Joi.date().format('YYYY-MM-DD').required(),
    // user:Joi.string(),
});

const getDiaryByDaySchema=Joi.object({
    date:Joi.date().format('YYYY-MM-DD').required(),
})

const diarySchemas={
    add:addProductSchema,
    delete:deleteProductSchema,
    getByDay:getDiaryByDaySchema,
};

const Diary=model('diary', diarySchema);

module.exports={
    Diary,
    diarySchemas,

}



