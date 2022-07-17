const {Diary}=require('../../models/diary');
const {createError}=require('../../helpers/errors');
const {deleteProduct}=require('../../services/diary/deleteProductService');

const deleteProductCtrl = async(req, res, next)=>{
    try{
        await deleteProduct(req.user._id, req.body);
        return res.json({
            status:"success",
            code:200,
            message:'product deleted'
        });
    }catch (err){
        next(err)
    }

}

module.exports={
    deleteProductCtrl
}