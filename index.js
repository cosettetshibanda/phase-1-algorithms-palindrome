function isPalindrome(word) {
  if(word.split('').reverse().join('') === word) {
    return true
  } else {
    return false
  }
}

  // Write your algorithm here

/* //write function
// receive one argument: a string
// returns true or false
// if else statement
// figure how to flip the word backwards
// 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/
// the first if statement takes the word 
//.split separates the palidrome into individual letters in a new array
// reverse() takes that new array and flips it
//.join pulls the array back together into a string
// it then compares to see if it matches the original word
// if they match the if else will sort it and return either true or false. 

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Epecting: true")
  console.log("=>", isPalindrome("mom"))

  console.log("Expecting: false")
  console.log("=>", isPalindrome("car"))
  
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
