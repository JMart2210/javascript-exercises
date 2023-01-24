const reverseString = function (string) {
  let reversed = "";
  let last = "";
  while (string.length) {
    let test = string.split("");
    //let test2 = test.reverse();
    last = string.charAt(string.length - 1);
    string = string.slice(0, string.length - 1);
    reversed += last;
  }
  return reversed;
};

// Answer from solutions fork copied below.
// THE FIRST "string.split('')" creates an array with each element a character
// THE NEXT "reverse()" inverts the order of each element
// THE join('') puts it back together as a string.

// const reverseString = function(string) {
//     return string.split('').reverse().join('')
//    };

// Do not edit below this line
module.exports = reverseString;
