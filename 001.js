/*
Source: https://projecteuler.net/problem=1

Problem:

"If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000."


My Algorithm in words:

1. Define a variable to hold the sum
2. Run a for-loop from 1 to 1000
3. If the number is a multiple of 3 or 5, add the number to the sum variable
4. Return the sum variable

*/

function solution() {
  var sum = 0; 

  for (let i = 0; i < 1000; i++) {
    if ((i % 3 === 0) || (i % 5 === 0)) { //to check whether i is divisble by 3 or 5, we check the remainder (with mod) when i is divided by 3 or 5
      sum += i;
    }
  }

  return sum;
}

console.log(solution()) //outputs the answer!
