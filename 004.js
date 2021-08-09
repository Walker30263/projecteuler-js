/*
Source: https://projecteuler.net/problem=4
Problem:
"A palindromic number reads the same both ways. 
The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers."

My Algorithm in words:
1. Define a function to check if a string is a palindrome
2. Define a variable to hold the largest palindromic product so far
3. Loop through all combinations of 3 digit numbers (100-999) x (100-999)
4. If the product is greater than the variable that holds the largest palindromic product so far, update the variable
5. Return the variable at the end, and we have the solution!
*/

function isPalindrome(string) {
	if (string === string.split("").reverse().join("")) { //compare the string with a reversed version of itself
  	return true; //if it's the same, then the string is a palindrome
  } else {
  	return false;
  }
}

function solution() {
  var largestPalindromeSoFar = 0;

	for (let i = 100; i <= 999; i++) { //first number is from 100 - 999
  	for (let j = i; j <= 999; j++) { //second number is from (first number) - 999 to avoid multiplying the same numbers in reverse order (a * b = b * a) because it's a waste of time/computer resources
    	if (isPalindrome((i*j).toString())) { //if it's a palindrome,
        if ((i*j) > largestPalindromeSoFar) { //and greater than the largest palindrome so far,
          largestPalindromeSoFar = i*j; //update the value of largestPalindromeSoFar
        }
      }
    }
  }

  return largestPalindromeSoFar; //once the loop is done, return the answer!
}

console.log(solution()); //outputs the answer!
