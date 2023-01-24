const sumAll = function (a, b) {
  let sum = 0;
  //this makes sure a is smaller than b
  if (a > b) {
    let temp = a;
    a = b;
    b = temp;
  }
  //this checks to mak sure the arguments are positive and numbers.
  if (
    a < 0 || //only need to check a because we know a < b. We might get errors since we didn't make sure they were numbers first?
    typeof a != "number" ||
    typeof b != "number"
  )
    return "ERROR";

  for (; a <= b; a++) {
    sum += a;
  }
  return sum;
};

// Alternative solution
// const sumAll = function(min, max) {
//     if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
//     if (min < 0 || max < 0) return "ERROR";
//     if (min > max) {
//       const temp = min;
//       min = max;
//       max = temp;
//     }
//     let sum = 0;
//     for (let i = min; i < max + 1; i++) {
//       sum += i;
//     }
//     return sum;
//   };

// Do not edit below this line
module.exports = sumAll;
