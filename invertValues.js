  // Given a set of numbers, return the additive inverse of each. 
  // Each positive becomes negatives, and the negatives become positives.

  // invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
  // invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
  // invert([]) == []
  // loop through the array
  // number * -1

  // es5 & forEach
  function additiveInverse1(numbersArray) {
    const thisArray = []
    numbersArray.forEach(function(el){
        thisArray.push(el * -1)
    }) 
    return thisArray
}

// es6 & map
const additiveInverse2 = numbersArray => numbersArray.map(number => number * -1);

// You can assume that all values are integers. Do not mutate the input array/list.
// Sample Test:
/* describe("Invert array values", function(){
    it("Basic Tests", function(){
      Test.assertDeepEquals(invert([1,2,3,4,5]), [-1,-2,-3,-4,-5]);
      Test.assertDeepEquals(invert([1,-2,3,-4,5]), [-1,2,-3,4,-5]);
      Test.assertDeepEquals(invert([]), []);
      Test.assertDeepEquals(invert([0]), [0]);
    });
  });
*/