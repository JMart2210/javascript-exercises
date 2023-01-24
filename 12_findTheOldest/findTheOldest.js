// const findTheOldest = function(array) {
//   // created variable to use in comparing ages
//   let oldestAge = 0;
//   // Map allows you to put every item in the array through a function
//   array.map(item => {
//     // this handles entries that have no death year.
//     if (!item.yearOfDeath) item.yearOfDeath = new Date().getFullYear();
//     // this creates and assigns an "age" key and calculates it's value, to be used for comparisons
//     item.age = item.yearOfDeath - item.yearOfBirth;
//     // if the current item is the oldest so far, it becomes the new standard for old age.
//     if (item.age > oldestAge) oldestAge = item.age;
//     return item;
//   });
//   // My issue was the correct answer was returning as the first object inside of an
//   // array, not just as an object. So I decided to create an empty object.
//   let ans = {};
//   // assigns the filtered array to the ans object. I specified index[0] manually to get it to work.
//   Object.assign(ans, array.filter( item => item.age == oldestAge)[0]);

//   return ans;
// };

//GIVEN SOLUTION: I like how they created a function for getting the age, but I liked how I added age t
// const findTheOldest = function(array) {
//   return array.reduce((oldest, currentPerson) => {    //thought it was interesting the first line was return...also the reduce method put the 1st person in the array (Carly) as "oldest" and 2nd person (Ray) as "currentPerson"
//     const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
//     const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
//     return oldestAge < currentAge ? currentPerson : oldest;   //return on the same line as the if statement consolidates the code.
//   })
// };

// const getAge = function(birth, death) {
//   if (!death) {
//     death = new Date().getFullYear();
//   }
//   return death - birth;
// };

// Do not edit below this line
module.exports = findTheOldest;

// STUFF I USED TO TEST AND GET IT WORKING IS BELOW.

// const people = [
//   {
//     name: "Carly",
//     yearOfBirth: 1066,
//   },
//   {
//     name: "Ray",
//     yearOfBirth: 1962,
//     yearOfDeath: 2011,
//   },
//   {
//     name: "Jane",
//     yearOfBirth: 1912,
//     yearOfDeath: 1941,
//   },
// ]

//     const person = {name: 'Ray', year: 2022};

// let test = findTheOldest(people);
// console.log(test);
// console.log(people);
// console.log(person);
// findTheOldest(people);
