const palindromes = function (text) {
    text = text.toLowerCase();              //makes string lower case
    text = text.replace(/[^\w\']|_/g, "");  //remove special characters and spaces
    let reversed = text;                    //creates copy of text
    reversed = reversed.split('').reverse().join('');//converts to array, reverses it, and converts back to string
    return (text === reversed);             // checks if reversed string matches text
};

//GIVEN SOLUTION: this solution is more condensed, but same basic logic.

// const palindromes = function(string) {
//     const processedString = string.toLowerCase().replace(/[^a-z]/g, "");
//     return (
//       processedString
//         .split("")
//         .reverse()
//         .join("") == processedString
//     );
//   };

// Do not edit below this line
module.exports = palindromes;