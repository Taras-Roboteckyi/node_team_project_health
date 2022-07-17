const {Diary}=require('../../models/diary');
const {createError}=require('../../helpers/errors');


const getDiaryByDay= async(user,{date})=>{
    if(isFutureDate(date)){
        throw createError(404,'Wrong date');
    }

    const diaryByDay= await Diary.find({user,date}).select({__v:0});

    return diaryByDay;

}
const isFutureDate = date => {
    const inputDay = new Date(date).setHours(0,0,0,0);

    const today = new Date().setHours(0,0,0,0);
  
    return inputDay > today
  }

  module.exports={getDiaryByDay};