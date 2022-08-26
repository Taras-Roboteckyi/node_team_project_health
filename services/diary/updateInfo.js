const {Diary}=require("../../models/diary");

const updateInfo= async (dateId, productId,total)=>{
    return await Diary.findByIdAndUpdate(dateId,{
        $pull:{consumedProducts:{_id:productId}},
        $set:{total:total},
    });
};

module.exports=updateInfo;
