const sumOfOther = (arr) => {
  let total = 0;
  const newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    total += +arr[i];
  }
  for (let j = 0; j < arr.length; j += 1) {
    newArr.push(total - arr[j]);
  }
  return newArr;
};

const make = (...a) => {
  let arr = [...a];
  function func(...b) {
    if (b[0] instanceof Function) {
      return arr.reduce(...b);
    }
    arr = [...arr, ...b];
    return func;
  }
  return func;
};

exports.sumOfOther = sumOfOther;
exports.make = make;
