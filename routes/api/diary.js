const express=require("express");
const router=express.Router();
const {addProductCtrl}=require('../../controllers/diary/addProduct')
const {diarySchemas}=require('../../models/diary')
const{auth}=require('../../middlewares/auth');
const { validateRequest } = require("../../middlewares");
const {deleteProductCtrl}=require('../../controllers/diary/deleteProduct');
const {getDiaryDataCtrl}=require('../../controllers/diary/getDiaryData');




router.post('/add',auth,validateRequest(diarySchemas.add), addProductCtrl);
router.delete('/remove', auth, validateRequest(diarySchemas.delete), deleteProductCtrl);
router.get('/:date', auth ,  getDiaryDataCtrl);

module.exports=router;