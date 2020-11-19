// Consider an array/list of sheep where some sheep may be missing from their place. 
// We need a function that counts the number of sheep present in the array (true means present).

// count the sheeps in the array
// if the sheep === true then count it
// loop through array
// return the counted number of sheep

function countSheeps(arrayOfSheep) {
  let count = 0
  
  arrayOfSheep.forEach(el => {
    if(el === true) {
      count++
    }
  })
  return count
}

// Example:
/* 
[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
  */