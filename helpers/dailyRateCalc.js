const dailyRateCalc = ({
  height = 0,
  age = 0,
  currentWeight = 0,
  desiredWeight = 0,
}) => {
  const result = Math.floor(
    10 * currentWeight +
      6.25 * height -
      5 * age -
      161 -
      10 * (currentWeight - desiredWeight)
  );
  return result;
};

module.exports = { dailyRateCalc };
