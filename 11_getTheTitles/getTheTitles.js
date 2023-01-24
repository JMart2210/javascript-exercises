//THIS WAS THE GIVEN SOLUTION. I WAS HITTING A BRICK WALL AND STILL DON'T
// REALLY UNDERSTAND HOW THE MAP METHOD WORKS. I'LL COME BACK TO IT.

const getTheTitles = function (array) {
  return array.map((obj) => obj.title);
};

// Do not edit below this line
module.exports = getTheTitles;

//You are given an array of objects that represent books with an author and a title that looks like this:
// const obj = {title: 'Book', author: 'Name'};
const books = [
  {
    title: "Book",
    author: "Name",
  },
  {
    title: "Book2",
    author: "Name2",
  },
];

let test = getTheTitles(books);
let test2 = getTheTitles([{ title: "mocking", author: "fancy man" }]);

getTheTitles(books);
//Your job is to write a function that takes the array and returns an array of titles:

// ```javascript
// getTheTitles(books) // ['Book','Book2']
// ```

// ## Hints

// - You should use a built-in javascript method to do most of the work for you!

// const getTheTitles = function(array) {
//     let ans = array.map(item => item.title);
//     return ans;
// };
