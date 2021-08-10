/*
Source: https://projecteuler.net/problem=6

Problem:
"The sum of the squares of the first ten natural numbers is, 1^2 + 2^2 + ... 10^2 = 385

The square of the sum of the first ten natural numbers is, (1 + 2 + ... + 10)^2 = 55^2 = 3025

Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 - 385 = 2640.

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum."


My Algorithm:

1. Use a for-loop to get the sum of the squares of the first 100 natural numbers
2. To find the sum of the first 100 natural numbers, use Gauss's summation trick: n(n+1)/2 is the sum of numbers from 1 to n
3. Square the result from step 2
4. Find the difference between the results of Step 1 and 2
*/

function sumSquares(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += Math.pow(i, 2); //increment sum by i^2
  }
  
  return sum;
}


//function finds the difference between the sum of the squares of the first x natural numbers and the square of the sum
function solution(x) {
  var sumOfSquares = sumSquares(x); //get the sum of the squares of the first x natural numbers
  
  var sum = (x * (x+1))/2 //gauss's summation trick
  
  var squareOfSums = Math.pow(sum, 2); //get the square of the sum of the first x natural numbers

  return Math.abs(squareOfSums - sumOfSquares); //return the absolute difference, absolute value gets rid of the sign just in case it's negative
}

console.log(solution(100))
