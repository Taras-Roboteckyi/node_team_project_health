const express=require('express');
const router=express.Router();

const {searchProducts}=require('../../controllers/products');


router.get("/search/:query", searchProducts);


module.exports=router;