const { getDiaryByDay } = require("../../services/diary/getDiaryByDay");
const { Diary } = require("../../models/diary");
const { date } = require("joi");

const getDiaryDataCtrl = async (req, res, next) => {
  try {
    const sumCalories = await Diary.aggregate([
      {
        $group: {
          _id: {
            user: "$user",
            date: "$date",
          },
          sum: {
            $sum: "$productCalories",
          },
        },
      },
    ]);
    const data = await getDiaryByDay(req.user._id, req.params);


    return res.json({
      status: "success",
      code: 200,
      message: "diary by date",
      sumCalories: sumCalories,
      result: data,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getDiaryDataCtrl,
};