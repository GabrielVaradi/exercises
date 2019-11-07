function findLargestInteger(arr, k) {
  let index;
  let modifiedArray = [...arr]
  let highestNumber;
  for (let i = 0; i < k-1; i++){
    highestNumber = Math.max(...modifiedArray)
    index = modifiedArray.indexOf(highestNumber)
    modifiedArray.splice(index, 1)
  }

  return Math.max(...modifiedArray)
}

console.log(findLargestInteger([1,3,5,4,2,6,7], 2))

function findLargestInteger2(arr, k) {
 let sortedArray = arr.sort()
 sortedArray.splice(sortedArray.length -(k -1))
 return Math.max(...sortedArray)
}

console.log(findLargestInteger2([1,3,5,4,2,6,7], 2))