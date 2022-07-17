const {getDiaryByDay}= require('../../services/diary/getDiaryByDay');

const getDiaryDataCtrl = async(req, res, next)=>{
    try{
        const data = await getDiaryByDay(req.user._id, req.params);
        return res.json({
            status:"success",
            code:200,
            message:'diary by date',
            data:{
               result: data,
            }
        });
    }catch (err){
        next(err)
    }

}

module.exports={
    getDiaryDataCtrl
}