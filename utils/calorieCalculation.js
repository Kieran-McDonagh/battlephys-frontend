export const calorieCalculation = (sex, weight, height, age) => {
  let BMR = 0;
  if (sex === "male") {
    BMR = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
  }
  if (sex === "female") {
    BMR = 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;
  }
  return BMR.toFixed();
};
