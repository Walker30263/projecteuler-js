/*
Source: https://projecteuler.net/problem=10

Problem:
"The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million."


My Algorithm:
1. Use the Sieve of Eratosthenes method to generate prime numbers
The algorithm in a gif: https://upload.wikimedia.org/wikipedia/commons/b/b9/Sieve_of_Eratosthenes_animation.gif
2. Execute a reducer function to add up all the numbers in the array of prime numbers
*/

function sieveOfEratosthenes(n) {
    let numbersUntilN = []
    let upperLimit = Math.sqrt(n);
    let primesUntilN = [];

    for (let i = 0; i < n; i++) {
        numbersUntilN.push(true); //makes an array from 2 to n-1
    }

    for (let i = 2; i <= upperLimit; i++) {
        if (numbersUntilN[i]) {
            for (let j = i * i; j < n; j += i) {
                numbersUntilN[j] = false; //"cross out" the numbers that are multiples of i, like in the algorithm gif https://upload.wikimedia.org/wikipedia/commons/b/b9/Sieve_of_Eratosthenes_animation.gif
            }
        }
    }
    
    
    //after the "crossing-out" is done, push the ones that are left to the primesUntilN array
    for (let i = 2; i < n; i++) {
        if(numbersUntilN[i]) {
            primesUntilN.push(i);
        }
    }

    return primesUntilN;
}

function solution(n) {
  let primesUntilN = sieveOfEratosthenes(n);

  const add = (a, b) => a + b;
  return primesUntilN.reduce(add);
}

console.log(solution(2000000)); //outputs the answer!
