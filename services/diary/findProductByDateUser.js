const { Diary } = require("../../models/diary");
const { formatDate } = require("../../helpers/diary");

const findProductByDateUser = async (date, userId) => {
  const formatedDate = formatDate(date);
  const dateInfo = await Diary.findOne({
    $and: [{ date: formatedDate }, { user: userId }],
  });
  return dateInfo;
};

module.exports = findProductByDateUser;