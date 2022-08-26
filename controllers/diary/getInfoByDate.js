const {findProductByDateUser, createNewDate}= require('../../services/diary');

const getInfoByDate= async(req, res)=>{
  const {_id}=req.user;
  const {date}=req.query;

  let result= await findProductByDateUser(date,_id);
  if(!result){
    result=await createNewDate(_id,date);
  }
  res.json({
    status:'success',
    code:200,
    data:result,
  });
};

module.exports={getInfoByDate};