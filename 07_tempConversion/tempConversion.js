const convertToCelsius = function(given) {
  let temp = ((given - 32)*(5/9)); //converts given F temp to C temp
  return Math.round(temp * 10 ) / 10; //returns the temperature rounded to 1 decimal place.
};

const convertToFahrenheit = function(given) {
  let temp = (given *(9/5)+32);
  return Math.round(temp * 10 ) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

// GIVEN SOLUTION - These were largely the same but consolidate the rounding into the same line, which makes it a little harder to read IMO.
// const convertToCelsius = function(fahrenheit) {
//   return Math.round((fahrenheit - 32) * (5/9) * 10) / 10;
// };

// const convertToFahrenheit = function(celsius) {
//   return Math.round(((celsius * 9/5) + 32) * 10) / 10;
// };