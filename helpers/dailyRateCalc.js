const dailyRateCalc = ({ height, age, currentWeight, desiredWeight }) => {
  const result = Math.floor(
    10 * currentWeight +
      6.25 * height -
      5 * age -
      161 -
      10 * (currentWeight - desiredWeight)
  );

  return console.log(result);
};
dailyRateCalc(176, 35, 80, 78);
module.exports = dailyRateCalc;

// "ФОРМУЛА ДЛЯ РОЗРАХУНКУ ДЕННОЇ НОРМИ КАЛОРІЙ ЖІНКАМ
// 10 * вага + 6.25 * зріст - 5 * вік - 161 - 10 * (вага - бажана вага)"
