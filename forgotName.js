/**
 * In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice.
 * Your task will be to
 return the sum of the numbers that occur only once.
 For example, repeats([4, 5, 7, 5, 4, 8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.
 */

// loop through array to see repeated #s
// remove repeated 
// return sum #s in array


function occurOnce(numbers) {
    const seenValues = {}
    numbers.forEach(number => {
        if(seenValues[number]) {
            delete seenValues[number]
        } else {
            seenValues[number] = 1
        }
    })
    return Object.keys(seenValues).reduce((acc, value) => parseInt(acc) + parseInt(value))
    console.log(seenValues)
}

occurOnce([4, 5, 7, 5, 4, 8])