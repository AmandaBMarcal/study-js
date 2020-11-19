// L1: Set Alarm

/*Write a function named setAlarm which receives two parameters. 
The first parameter, employed, 
is true whenever you are employed and the second parameter, 
vacation is true whenever you are on vacation.

The function should return true if you are employed and not on vacation 
(because these are the circumstances under which you need to set an alarm). 
It should return false otherwise. 
Examples:

setAlarm(true, true) -> false
setAlarm(false, true) -> false
setAlarm(false, false) -> false
setAlarm(true, false) -> true
*/

function setAlarm(employed, vacation){
  if (employed && !vacation) {
    return true
  } else {
    return false
  }
}


/* 
Test.expect(!setAlarm(true, true), "Should be false.");
Test.expect(!setAlarm(false, true), "Should be false.");
Test.expect(setAlarm(true, false), "Should be true.");
*/


//------------------------------------------------------------

// Square(n) Sum
/* Complete the square sum function so that it squares each number passed into it and then sums the results together.
For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
*/


function squareSum(numbers){
  let sum=0;
  for(i=0; i<numbers.length; i++) {
    sum+= numbers[i] * numbers[i]
  }
  return sum
}

/*
Sample Tests: 
Test.assertEquals(squareSum([1,2]), 5)
Test.assertEquals(squareSum([0, 3, 4, 5]), 50)
*/