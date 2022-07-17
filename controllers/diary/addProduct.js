const {Diary}=require('../../models/diary');
const {createError}=require('../../helpers/errors');
const {addProduct}=require('../../services/diary/addProductService');



const addProductCtrl= async(req,res,next)=>{

    try{
    const product = await addProduct(req.user._id, req.body);
    const {_id, date, user,productWeight, productTitle, productCalories}=product;

    return res.status(201).json({
        data:{_id, date, user,productWeight, productTitle, productCalories}
    })
}catch (err){
    next(err)
}

}


module.exports={addProductCtrl}