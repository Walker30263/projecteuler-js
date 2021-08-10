/*
Source: https://projecteuler.net/problem=5

Problem:
"2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?"


My Algorithm:

This is actually doable without code using number theory, but since this is a GitHub repository with JS solutions, here's the JS algorithm:

1. Define a function to check if number is evenly divisble by all numbers from 1 to 20
2. Use a while loop to increment i by the product of all prime numbers from 1 to 20, since the number has to be a multiple of all the prime numbers from 1 to 20 if it is evenly divisible by all numbers from 1 to 20
3. End the loop when it's divisble by all numbers from 1 to 20
*/

function isEvenlyDivisble(x) {
  for (let i = 1; i <= 20; i++) {
    if (x % i !== 0) { //if the remainder is not 0, it's not evenly divisble, so return false
      return false;
    }
  }

  return true; //if the number survived through all 20 divisbility trials in the for-loop, then return true
}

function solution() {
  let incrementBy = 2*3*5*7*11*13*17*19; //product of all prime numbers from 1-20
  
  let i = 0;
  while ((!isEvenlyDivisble(i)) || (i === 0)) { //while i isn't evenly divisible or if i is 0 (it's initial value)...
    i += incrementBy; //add it by the product of all prime numbers from 1-20
  }
  
  return i; //when i is evenly divisble, return it, we now have the answer!
}

console.log(solution()); //the answer!
