const caesar = function (str, shift) {
  // Created our new string
  let newString = "";
  // loop that runs through each character based on the length of the given string
  for (let i = 0; i < str.length; i++) {
    // checks if character is a letter. If it's not, it jumps to the bottom where it's just added to the new string
    if (isLetter(str.charAt(i))) {
      // runs function that retrieves the new character code after it is shifted, and assigns it to newCharCode
      let newCharCode = getNewCharCode(str.charCodeAt(i), shift);
      // adds character (from new character code) to the end of the newString.
      newString += String.fromCharCode(newCharCode);
      console.log(newString);
    } else newString += str.charAt(i);
  }
  return newString;
};
//this is a small function I found in a google search that checks if a given character is a letter
function isLetter(c) {
  return c.toLowerCase() != c.toUpperCase();
}
//
function getNewCharCode(code, shift) {
  if (code <= 90 && code >= 65) {
    //checks if original code is from a capital letter
    if (code + shift > 90) {
      //if the shift is going to take it above the alphabet range
      return getNewCharCode(code, shift - 26); // we return a call to this same function, but this time we reduce the shift by the size of the alphabet
    } else if (code + shift < 65) {
      //if the shift is going to take it below the alphabet range
      return getNewCharCode(code, shift + 26); // we return a call to same function again, but the shift is not plus the size of the alphabet
    } else return code + shift; //eventually all upper case letters will reach this line which returns a newCharCode within an acceptable range.
  } else if (code >= 97 && code <= 122) {
    //checks if original code is from a lower case letter, and performs same process as above for upper case letters.
    if (code + shift > 122) {
      return getNewCharCode(code, shift - 26);
    } else if (code + shift < 97) {
      return getNewCharCode(code, shift + 26);
    } else return code + shift; //eventually all lower case letters reach this line which return newCharCode within acceptable range.
  }
}

let test = caesar("Mjqqt, Btwqi!", -5);
console.log(test);

//GIVEN SOLUTION: Don't understand how some of it works. I'll come back to it.
// const caesar = function(string, shift) {
//     return string
//       .split("")
//       .map(char => shiftChar(char, shift))
//       .join("");
//   };

//   const codeSet = code => (code < 97 ? 65 : 97);

//   // this function is just a fancy way of doing % so that it works with negative numbers
//   // see this link for details:
//   // https://stackoverflow.com/questions/4467539/javascript-modulo-gives-a-negative-result-for-negative-numbers
//   const mod = (n, m) => (n % m + m) % m;

//   const shiftChar = (char, shift) => {
//     const code = char.charCodeAt();

//     if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
//       return String.fromCharCode(
//         mod(code + shift - codeSet(code), 26) + codeSet(code)
//       );
//     }
//     return char;
//   };

// Do not edit below this line
module.exports = caesar;
