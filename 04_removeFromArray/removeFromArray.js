//the last argument that starts with ... and collects all parameters after the first into an array
const removeFromArray = function(myArray, ...args) {   

    //this cycles through each element in the rest parameter array that was created in line 2
    for (element of args) {  
        //this cycles through each element in the first argument array. Since it uses "in" not "of" it returns the index of the element, not the item itself.
        for (element2 in myArray) {     
            // if elements match, we remove it from myArray using splice and the index from element2.
            if (myArray[element2] === element) myArray.splice(element2,1);     
        }
    
    }
    
    return myArray;

}

// There were 2 alternative solutions
// I forgot (or wasn't aware) of some of the array methods used here, so good to see another way!
// Solution 1:
// const removeFromArray = function (...args) {
//     // the very first item in our list of arguments is the array, we pull it out with args[0]
//     const array = args[0];
//     // create a new empty array
//     const newArray = [];
//     // use forEach to go through the array
//     array.forEach((item) => {
//       // push every element into the new array
//       // UNLESS it is included in the function arguments
//       // so we create a new array with every item, except those that should be removed
//       if (!args.includes(item)) {
//         newArray.push(item);
//       }
//     });
//     // and return that array
//     return newArray;
//   };

//SOLUTION 2 - I don't know how this one works.
// var removeFromArray = function(...args) {
//    const array = args[0]
//    return array.filter(val => !args.includes(val))
// }

// Do not edit below this line

module.exports = removeFromArray;