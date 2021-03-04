// Given a non-empty array of integers, return the result of multiplying the values together in order.

// non empty array of integers
// return * the values together in order
// multipliedValues=reduce(acc, currentValue) => acc * currentValue  

// ex. [3, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

const multipliedValues = intArray => {
    return intArray.reduce((acc, currentValue) => acc * currentValue)
} 
                                                                                                
// solutions:
console.log(multipliedValues([1, 2, 3, 4])); // 24
console.log(multipliedValues([5, 5, 7, 8])); // 1400
console.log(multipliedValues([1, 2, 4, 8])); // 64
console.log(multipliedValues([0, 2, 6, 9])); // 0


//----------------------------------------
/* You will be given an array of all the family members' ages, in any order. 
The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed 'age' of 0. 
Return a new array with [youngest age, oldest age, difference between the youngest and oldest age].*/
// array of family ages in any order
// whole #s
// return array w/ [youngest age, oldest age, difference between the 2]
// ...familyAges -- spread syntax
// Math.min
// Math.max
// max-min(...familyAges)

const differenceInAge = familyAges => {
    [ Math.min(...familyAges), Math.max(...familyAges) - Math.min(...familyAges), Math.max(...familyAges) ]
}

// solutions:
console.log(differenceInAge([1, 49, 50]));
console.log(differenceInAge([2, 58, 60]));
console.log(differenceInAge([10, 22, 32]));
console.log(differenceInAge([0, 29, 29]));


//----------------------------------------
// Sum all the numbers of the array except the highest and the lowest element (the value, not the index!).

// sum #s in array
// except highest and lowest el
// sort(a, b) => a-b
// slice(first, last) remove first and last
// reduce(acc, value) => acc + current, at index

/*
ex.
[ 6, 2, 1, 8, 10 ] 
[ 1, 2, 6, 8, 10 ] // 16

[1, 1, 11, 2, 3] 
[ 1, 1, 2, 3, 11 ] // 6 
*/

const highestLowestSum = sumArrays => {
    sumArrays.sort((a, b) => a-b).slice(1, sumArrays.length -1).reduce((acc, value) => acc + value, 0)
}


// solutions:
console.log(highestLowestSum([6, 2, 1, 8, 10]));
console.log(highestLowestSum([1, 1, 11, 2, 3]));

//----------------------------------------
/* Your goal is to create a function that removes the first and last characters of a string. 
You're given one parameter, the original string. 
You don't have to worry with strings with less than two characters.*/
// removes first and last char of ''
// (str)
// don't wory about str w/ less than 2 char
// substring(start, end)

// if (i !== 0 && i !== str.length-1) answer += str[i]

/*
ex.
'resilient' => 'esilien'
'leon' => 'eo'
'amanda' => 'mand'
'interview' => 'ntervie'
*/


const removeFirstAndLast = str => str.substring(1, str.length-1)

 
// solutions
console.log(removeFirstAndLast('resilient')); // 'esilien'
console.log(removeFirstAndLast('leon')); // 'eo'
console.log(removeFirstAndLast('amanda'));// 'mand'
console.log(removeFirstAndLast('interview'));// 'ntervie'


//----------------------------------------
// Create a function that alternates the case of a given string.
// str
// split('')
// map( toLowerCase ? toUpperCase :  .........)
// join('')

/*
ex. 
HeLLo WoRLd //hEllO wOrlD
'aManDa' //AmANdA
*/ 

const caseReverse = str => {
    str
    .split('')
    .map(char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase())
    .join('')
}

//solutions:
console.log(caseReverse('HeLLo WoRLd'));
console.log(caseReverse('aManDa'));


//----------------------------------------
/* Create a function that will return a string that combines all of the 
letters of the three inputed strings in groups. 
Taking the first letter of all of the inputs and grouping them next to each other. 
Do this for every letter */
// return a string
// combine all letters of '3' strings in groups
// take first letter of input of all 3 and group together
// all inputs = same length

// split('')
// map((char, i) => char + string2[i] + string3[i])
// join('')

/*
ex.
input: 'aa', 'bb', 'cc' => output: 'abcabc'
input: 'qwe', 'kcx', 'hwq' = output: 'qkhwcwexq'
*/

const combinedInputs = (string1, str2, str3) => {
    string1.split('').map((char, i) => char + string2[i]+ string3[i]).join('')
}

//solution:
console.log(combinedInputs('aa', 'bb', 'cc')); // 'abcabc'