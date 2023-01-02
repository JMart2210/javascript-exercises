const fibonacci = function(n) {
    if (n < 0) return 'OOPS';
    if (n < 3) return 1;
    
    return fibonacci(n-1) + fibonacci(n-2);
};

//GIVEN SOLUTION - they used a temporary variable to make the algorithm work
// it's a little confusing to me, but no more confusing than the recursion formula I used.
// const fibonacci = function(count) {
//     if (count < 0) return "OOPS";
//     if (count === 0) return 0;
//     let a = 0;
//     let b = 1;
//     for (let i = 1; i < count; i++) {
//       const temp = b;
//       b = a + b;
//       a = temp;
//     }
//     return b;
//   };

// Do not edit below this line
module.exports = fibonacci;

// I used these to test functionality 
// let test = fibonacci(1);
// let test2 = fibonacci(2);
// let test3 = fibonacci(3);
// let test4 = fibonacci(4);
// let test5 = fibonacci(5);
// let test6 = fibonacci(6);