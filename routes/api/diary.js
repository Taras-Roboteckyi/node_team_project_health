const express=require("express");
const router=express.Router();
const {addProduct}=require('../../controllers/diary/addProduct')
const {diarySchemas}=require('../../models/diary')
const{auth}=require('../../middlewares/auth');
const { validateRequest } = require("../../middlewares");
const {deleteProduct}=require('../../controllers/diary/deleteProduct');
const {getInfoByDate}=require('../../controllers/diary/getInfoByDate');





router.post('/add',auth, validateRequest(diarySchemas.add), addProduct);
router.delete('/remove', auth, deleteProduct);
router.get('/', auth ,  getInfoByDate);

module.exports=router;