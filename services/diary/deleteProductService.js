const {Diary}=require('../../models/diary');
const {Product}=require('../../models/product');
const {createError}=require('../../helpers/errors');

const deleteProduct = async(user, body)=>{
    const {date, productTitle}=body;

    
    if (!isCurrentDate(date)){
        throw createError(400,'Date must be current');
    }

    const product= await Diary.findOneAndRemove({user,date,productTitle});

    if(!product){
        throw createError(404,'There is no such product in your diary today')
    }
}
const isCurrentDate=date=>{
    const inputDay=new Date(date).setHours(0,0,0,0,);
    const today= new Date().setHours(0,0,0,0);

    return inputDay===today;
}

module.exports={
    deleteProduct
}
