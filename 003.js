/*
Source: https://projecteuler.net/problem=3
Problem:
"The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?"

My Algorithm in words:
1. Since it would take forever to check for all the factors of 600851475143, we will have to do prime factorization
2. To do prime factorization, we will have to count from 2 to 600851475143 to find the lowest number that goes into 600851475143
3. After we get that number, we will divide 600851475143 by that number
4. Repeat steps 2 and 3 (with a while loop) until we get a number that can't be broken down any further
5. That number is the answer!
*/

function smallestFactor(x) {
  for (let i = 2; i < x; i++) { //count from 2 to x
  	if (x % i === 0) { //if the remainder of x/i is 0, i is a factor of x
      return i; //since i increments from 2 to x, i at this point will be the smallest number that goes into x
    }
  }
  return x; //returns x if it can't be broken down
}

function solution(n) {
  while (smallestFactor(n) !== n) { //while the smallest factor other than one isn't itself...
    console.log(`${n} / ${smallestFactor(n)} = ${n/smallestFactor(n)}`) //console.log just to show work
  	n = n/smallestFactor(n) //divide by the smallest factor
  }
  return n; //when the smallest factor other than one is itself, you have the answer!
}

console.log(solution(600851475143)); //logs the solution

/*
You can see it in action on JSfiddle if you want: https://jsfiddle.net/snb5mqaL/20/
*/
