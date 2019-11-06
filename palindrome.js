const isPalindrome = word => {
  let x = 0
  const wordFromLeft = word.toLowerCase().split(' ').join('').split('')
  const wordFromRight =  word.toLowerCase().split(' ').join('').split('').reverse()
    while (wordFromLeft[x] === wordFromRight[x]) {
      x+=1
      if (x >= wordFromLeft.length/2) {
        return true
      }
  }
  return false
}


console.log(isPalindrome('hello'))
console.log(isPalindrome('acbca'))
console.log(isPalindrome('abccba'))
console.log(isPalindrome('a'))
console.log(isPalindrome('ab'))
console.log(isPalindrome('A nut for a jar of tuna'))
console.log(isPalindrome('King are you glad you are king'))
console.log(isPalindrome('Was it a car or a cat I saw'))

// function palindrome(str) {
//   var re = /[\W_]/g;
//   var lowRegStr = str.toLowerCase().replace(re, '');
//   var reverseStr = lowRegStr.split('').reverse().join('');
//   return reverseStr === lowRegStr;
// }
// palindrome("A man, a plan, a canal. Panama");

