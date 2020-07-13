const addDigits = (num) => {
  const numStringed = num.toString();
  let result = 0;
  for (let i = 0; i < numStringed.length; i +=1) {
    result += +numStringed[i];
  }
  if (result >= 10) {
    return addDigits(result);
  }
  return result;
};
export default addDigits;