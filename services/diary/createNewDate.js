const {Diary}=require("../../models/diary");
const {formatDate}=require("../../helpers/diary")

const createNewDate= async(userId, date)=>{
    const formatedDate=formatDate(date);

    const dateInfo={
        user: userId,
        date:formatedDate,
        consumedProducts:[],
        total:0,
    };

    return await Diary.create(dateInfo);

}

module.exports=createNewDate;