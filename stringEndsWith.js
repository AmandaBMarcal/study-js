/* 
Complete the solution so that it returns true if the first argument(string)
 passed in ends with the 2nd argument (also a string).
/* 
Examples:
solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
*/

// check if str == second str
// str.substring

function solution(str, ending){
  if (ending == str.substring(str.length - ending.length)) {
    return true
  } else {
    return false
  }
}

// --------------------

// ternary operator
function solution(str, ending){
    return (ending == str.substring(str.length - ending.length))  ? true : false
  }

// --------------------

const solution = (str, ending) => {
    return str.endsWith(ending)
}


