/**
 * Create a function that puts all zeros at the end of the array
 *
 * input: array of numbers
 * output: same array of numbers, but all zeros must be at the end of the array
 * The other elements of the array must remain in the same position
 * i.e.:
 *  input: [9,3,0,5,6,1,9,1,1231,0]
 *  ouput: [9,3,5,6,1,9,1,1231,0, 0]
 *
 */


function putZerosAtEndOfArray(array) {
    let originalArray = [...array]
    let answerArray = []
    let arrayOfZeros = []
    let spliced;

    for (let [i, number] of originalArray.entries()) {
      if (number === 0) {
        spliced = originalArray.splice(i, 1)
        arrayOfZeros.push(spliced[0])
      }
    }
   answerArray = [...originalArray, ...arrayOfZeros]
   return answerArray

}

console.log(putZerosAtEndOfArray([9,3,0,5,6,1,9,1,1231,0]))


// loop first array to get the 0
// when you find a 0, remove it from array and put it in another array
// merge both arrays