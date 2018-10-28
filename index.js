const sumOfOther = (arr) => {
  let total = 0;
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    total += +arr[i];
  }
  for (let j = 0; j < arr.length; j++) {
    newArr.push(total - arr[j]);
  }
  return newArr;
};

exports.sumOfOther = sumOfOther;
