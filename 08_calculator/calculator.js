const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;	
};

const sum = function(array) {
  let total = 0;
  for (element of array) {
    total += element;
  }
  return total;
}
// GIVEN SOLUTION -No idea how this works: 
// const sum = function(array) {
//   return array.reduce((total, current) => total + current, 0);
// };

const multiply = function(array) {
  let total = 0;
  for (element of array) {
    if (!total) total = element;
    else total *= element;
  }
  return total;
};
// GIVEN SOLUTION -No idea how this works.
// const multiply = function(array) {
//   return array.length
//     ? array.reduce((accumulator, nextItem) => accumulator * nextItem)
//     : 0;
//};

const power = function(num, pow) {
  let total = num;
  for (let i = pow - 1; i > 0;i--) {
    total *= num;
  }	
  return total;
};
//GIVEN SOLUTION -this makes sense, but I thought exercise was for us to manually do it. oh well!
// const power = function(a, b) {
//   return Math.pow(a, b);
// };

const factorial = function(num) {
  if (num === 0) return 1;
  	let total = 0;
    for ( ; num > 0 ; num-- ) {
      if (!total) total = num;  //I added this to handle the problem of multiplying by 0 in the first round.
      else total *= num;
    }
    return total;
};
//GIVEN SOLUTION - Their solution to the multiplying by 0 problem is probably better than how I handled it.
// const factorial = function(n) {
//   if (n === 0) return 1;
//   let product = 1;         //this is the line where they handled multiplying by 0 problem.
//   for (let i = n; i > 0; i--) {
//     product *= i;
//   }
//   return product;
// };
//SECOND SOLUTION USING RECURSION:
// This makes a lot of sense.
const recursiveFactorial = function(n) {
  if (n === 0) {
    return 1;
  }
  return n * recursiveFactorial(n-1);
};


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
