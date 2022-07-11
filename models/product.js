const {Schema, model}=require("mongoose");
// const Joi=require('joi');

const productSchema= new Schema({
    _id:{
        type:Object,
    },
    categories:{
        type: Array,
    },
    weight:{
        type:Number, 
        default:100},
    title:{
        type: Object,
    },
    calories:{
        type:Number},
    groupBloodNotAllowed:{
        1:Boolean,
        2:Boolean,
        3:Boolean,
        4:Boolean
    }
})

const Product=model('Product',productSchema);

module.exports={Product}