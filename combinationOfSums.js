
/**
 * Find combination of sums
 *
 * input #1: array of numbers
 * input #2: number
 *
 * Output: list of tuples of numbers from the array who's sum is equal to the
 * input #2.
 *
 * i.e.:
 *  input #1: [3, 3, 3, 5, 1, 6, 0]
 *  input #2: 6
 *
 *  output: [
 *      [3,3],
 *      [3,3],
 *      [3,3],
 *      [5,1],
 *      [6,0]
 * ]
 *
 */

// What if we have no combinations that match the sum?
// What if there are negative numbers?

function findPairsInArrayWithSum(array, sum) {
    let answerArray = []
    for(let i = 0; i <= array.length-2; i++) {
      for (let j = i+1; j <= array.length-1; j++) {
        if (array[i] + array[j] === sum) {
          answerArray.push([array[i], array[j]])
        }
      }
    }
    return answerArray
}
console.log (findPairsInArrayWithSum([3, 3, 3, 5, 1, 6, 0], 6))
console.log (findPairsInArrayWithSum([3, 3, 3, 5, 1, 6, 0, 4, 4, 3, 7, 1, 5, 1], 8))

// create an empty array that will be pairs
// loop through the array twice, to test 1 number with all the numbers remaining
// if the pairs = 0, push them into the array