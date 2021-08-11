/*
Source: https://projecteuler.net/problem=9

Problem:
"A Pythagorean triplet is a set of three natural numbers, a < b < c, for which a^2 + b^2 = c^2,

For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc."


My Algorithm:

1. Generate triplets using Euclid's formula for generating Pythagorean triples given an arbitrary pair of integers m and n:
a = m^2 - n^2, b = 2*m*n, c = m^2 + n^2
2. If a + b + c = 1000, return a*b*c
*/

function solution() {
  for (let n = 1; n < 32; n++) { //32 is kinda arbitrary.
  	for (let m = n+1; m < 32; m++) { //I did this because 32^2 is 1024, and since the max sum of a, b, and c is 1000 in the problem, generating triples up to m = 32 would cover all triples that might add up to 1000
    	let a = Math.pow(m, 2) - Math.pow(n, 2)
      let b = (2 * m * n)
      let c = Math.pow(m, 2) + Math.pow(n, 2);
      
      //https://en.wikipedia.org/wiki/Pythagorean_triple#Proof_of_Euclid's_formula 
      //if you want to know how the formula works
      
      if ((a + b + c) === 1000) { //if the sum is 1000..
        return (a*b*c); //we have the answer!
      }
    }
  }
}

console.log(solution()); //outputs the answer!
