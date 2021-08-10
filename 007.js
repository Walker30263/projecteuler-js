/*
Source: https://projecteuler.net/problem=7

Problem:
"By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?"


My Algorithm:

1. Define a function to check if a number is prime
2. Define an array to store prime numbers in
3. Use a variable called "i" to generate prime numbers until i
4. Use a while loop to keep generating prime numbers until 10,001 have been generated
5. Return the 10001th value of the array (index [10001-1] because arrays start at index 0)
*/

function isPrime(n) {
  if (n === 1) {
    return false; //1 isn't prime
  } else if (n === 2) {
    return true; //2 is prime
  } else {
    for (var i = 2; i < n; i++) {
      if (n % i === 0) {
        return false; //if any number from i to n is divisible by i, the function immediately stops and returns false
      }
    }
    return true;
  }
}

function nthPrimeNumber(n) {
  let primes = [];
  
  let i = 1;
  while (primes.length < n) { //while the array doesn't have n prime numbers in it...
    i++; //increment i
    if (isPrime(i)) { //check if i is prime
      primes.push(i) //if so, add to primes array
    }
  }
  
  return primes[n-1]; //Return the nth value of the array (index [n-1] because arrays start at index 0)
}

console.log(nthPrimeNumber(10001)); //outputs the answer!
