// Description of what the method does. 
// How it works
// it's time complexity (if appropriate)
// ES6+ example

// -------------------- Map ------------------------
/* The Map() method results in a new array populated by the result of calling its callback function on each element of the array */

// How it works:
const array1 = [1, 4, 9, 16];
const map1 = array1.map(x => x * 2); // Map through array1 // x is the callback function multiplying each element by 2 when it's called
console.log(map1);
// expected output: Array [2, 8, 18, 32]

/* Example Problem Using Arr.map(): 
Given a set of numbers, return the additive inverse of each. 
Each positive becomes negatives, and the negatives become positives. */
const additiveInverse = numbersArray => numbersArray.map(number => number * -1);
// where number is the callback function used to map through and call on each element of the numbersArray

// -------------------- Reduce ---------------------

